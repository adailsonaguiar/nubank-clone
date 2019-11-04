import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Content,
  CardHeader,
  CardContent,
  CardFooter,
  Description,
  Title,
  Annotation,
} from './styles';
import {View, Text} from 'react-native';

const Main = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>
        <CardContent>
          <Title>Saldo Disponível</Title>
          <Description>RS 543.298,43</Description>
        </CardContent>
        <CardFooter>
          <Annotation>Transferência enviada no valor de R$ 132,90</Annotation>
        </CardFooter>
      </Content>
      <Tabs />
    </Container>
  );
};

export default Main;
