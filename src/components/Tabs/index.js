import React from 'react';
import {Text} from 'react-native';
import {Container, TabsContainer, TabItem, TabText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tabs = () => {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <Text style={{color: 'white', frontSize: 13}}>Indicar amigos</Text>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <Text style={{color: 'white', frontSize: 13}}>Cobrar</Text>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <Text style={{color: 'white', frontSize: 13}}>Depositar</Text>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <Text style={{color: 'white', frontSize: 13}}>Transferir</Text>
        </TabItem>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <Text style={{color: 'white', frontSize: 13}}>Ajustar limite</Text>
        </TabItem>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <Text style={{color: 'white', frontSize: 13}}>Me Ajuda</Text>
        </TabItem>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <Text style={{color: 'white', frontSize: 13}}>Pagar</Text>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <Text style={{color: 'white', frontSize: 13}}>Bloquear cartão</Text>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default Tabs;
