import React from 'react'

import {
  NETWORK_ITEMS as networkItems,
} from 'data/networkData';

import { Main, Wrapper, Card } from './socials.style'

function Socials() {

  return (
    <Wrapper className="socialWrapper">
      <Main>
        {networkItems.map(({ name, color, url, icon: Icon }) => (
          <Card
            key={name + 'key'}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            color={color}
            aria-label={'Social external link for navigate to ' + name}
            className="card"
          >
            {Icon}
          </Card>
        ))}
      </Main>
    </Wrapper>
  )
}

export default Socials
