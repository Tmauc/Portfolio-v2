import React from 'react'

import {
  NETWORK_ITEMS as networkItems,
} from 'data/networkData';

import { AiOutlineGlobal } from 'react-icons/ai';

import { MainBack, Main, Wrapper, WrapperBack, Icon, Text, Card } from './socials.style'

function Socials() {

  return (
    <Wrapper className="socialWrapper">
      <Main>
        {networkItems.map(({ name, color, url, icon: Icon, className }) => (
          <Card
            key={name + 'key'}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            color={color}
            className="card">
            {Icon}
          </Card>
        ))}
        <WrapperBack>
          <Icon><AiOutlineGlobal /></Icon>
          <Text>Hover me</Text>
        </WrapperBack>
        <MainBack />
      </Main>
    </Wrapper>
  )
}

export default Socials
