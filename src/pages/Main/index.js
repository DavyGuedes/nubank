import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Content, Card, CardHeader, CardContent, Title, Description, CardFooter, Annotation
} from './styles'

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu/>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferência de R$ 50,00 recebida de Levy Guedes hoje ás 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
};
