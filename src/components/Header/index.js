import React from 'react';
import {View, Text} from 'react-native';

import {Container, Top, Logo, Title} from './styles';
import logo from '../../assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Adailson</Title>
      </Top>
      <Icon name="keyboard-arrow-down" color="#fff" size={16} />
    </Container>
  );
};

export default Header;
