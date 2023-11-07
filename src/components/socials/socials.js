import React from 'react';
import { useTheme } from 'styled-components';

import { Main, Wrapper, Card } from './socials.style';

function Socials() {
  const { networkItems } = useTheme();

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
  );
}

export default Socials;
