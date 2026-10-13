const { spawn } = require('child_process');
const fs = require('fs');

async function capture() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--window-size=1440,1100',
    'http://localhost:5174/'
  ]);

  await new Promise((r) => setTimeout(r, 2000));

  try {
    const res = await fetch('http://localhost:9222/json');
    const tabs = await res.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;
    const ws = new WebSocket(wsUrl);

    await new Promise((r) => (ws.onopen = r));

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        const onMsg = (e) => {
          const data = JSON.parse(e.data);
          if (data.id === id) {
            ws.removeEventListener('message', onMsg);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', onMsg);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    // Wait for react hydration
    await new Promise((r) => setTimeout(r, 1500));

    // Scroll window to the very bottom
    await send('Runtime.evaluate', {
      expression: 'window.scrollTo(0, document.body.scrollHeight);',
    });

    await new Promise((r) => setTimeout(r, 1500));

    // Capture screenshot of the bottom viewport
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
    });

    fs.writeFileSync(
      'scratch/footer_viewport_1440.png',
      Buffer.from(shot.data, 'base64')
    );
    console.log('Successfully saved scratch/footer_viewport_1440.png');

    ws.close();
  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    chrome.kill();
  }
}

capture();
