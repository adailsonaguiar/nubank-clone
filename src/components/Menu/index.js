import React from 'react';
import {Container, Code, Nav, NavItem, NavText} from './styles';
/* import QRCode from 'react-native-qrcode'; */
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = () => {
  return (
    <Container>
      <Code>
        <Icon name="qrcode" color="#fff" size={90} />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="question" size={20} color="#fff" />
          <NavText>Me ajuda!</NavText>
        </NavItem>
        <NavItem>
          <Icon name="user" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="mobile" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        <NavItem>
          <Icon name="mobile" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        <NavItem>
          <Icon name="mobile" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        <NavItem>
          <Icon name="mobile" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
        <NavItem>
          <Icon name="mobile" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
    </Container>
  );
};

export default Menu;
