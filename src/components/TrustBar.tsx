import React from 'react';
import { PetTrustSection, PetTrustSectionProps } from './PetTrustSection';

export interface TrustBarProps extends PetTrustSectionProps {}

export const TrustBar: React.FC<TrustBarProps> = (props) => {
  return <PetTrustSection {...props} />;
};

export default TrustBar;
export { PetTrustSection };
