import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';

import { ButtonWrapper, Icon } from './button.style';

function Button({ label, href, CustomIcon }) {
  return (
    <ButtonWrapper href={href} type="button" target="_blank">
      <Icon>{CustomIcon ? <CustomIcon /> : <RiSendPlaneFill />}</Icon>
      {label}
    </ButtonWrapper>
  );
}

export default Button;
