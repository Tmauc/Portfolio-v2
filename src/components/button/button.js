import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri';

import { ButtonWrapper, Icon } from './button.style'

function Button({ label }) {
  var name = 'tmauccc';

  return (
    <ButtonWrapper
      href={'mailto:' + name + '@gmail.com'}
      type="button"
    >
      < Icon >
        <RiSendPlaneFill />
      </Icon >
      {label}
    </ButtonWrapper >
  )
}

export default Button
