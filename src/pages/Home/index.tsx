import React from 'react';
import { Link } from 'react-router-dom';
import { fadeInUp } from '../../utils/utils';
import { Container, Header, Content, HeaderContent, Button } from './styled';
import Logo from '../../components/Logo';

function Home() {
  return (
    <Container>
      <Header>
        <Content initial={fadeInUp.initial} animate={fadeInUp.animate}>
          <HeaderContent>
            <Logo size="large" />
          </HeaderContent>
        </Content>
      </Header>

      <Content>
        <Link to="pokedex">
          <Button>Pokédex</Button>
        </Link>
      </Content>
    </Container>
  );
}

export default Home;
