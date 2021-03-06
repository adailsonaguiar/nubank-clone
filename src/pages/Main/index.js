import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '../../components/Menu';

import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Description,
  Title,
  Annotation,
  Content,
} from './styles';

const Main = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = new Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-150, 0, 380],
                    outputRange: [-23, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>RS 1.389.399,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência enviada no valor de R$ 132,90
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
