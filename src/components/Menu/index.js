import React from 'react';

// import QRCode from 'react-native-qrcode' // deprecated
import QRCode from 'react-native-qrcode-svg';

import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Code, Nav, NavItem, NavText } from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://davyguedes.github.io"
          size={80}
          color="#8B10AE"
          backgroundColor="#FFF"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="cred-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>
    </Container>
  );
}
