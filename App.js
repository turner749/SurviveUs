import React, { Component } from 'react';

import { Router, Scene } from 'react-native-router-flux';

import {
  Container,
  Header,
  Content,
  Body,
  Title,
  Button,
  Left,
  Right,
  StyleProvider,
  Icon,
  Text,
} from 'native-base';

import { Root } from 'native-base';

import getTheme from './native-base-theme/components';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { HomeScreen } from './components/home-screen/HomeScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    } else {
      return (
        <StyleProvider style={getTheme()}>
          <Container>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name="menu" />
                </Button>
              </Left>
              <Body>
                <Title>Survive Us</Title>
              </Body>
              <Right />
            </Header>
            <Content>
              <HomeScreen gello="jello" />
            </Content>
          </Container>
        </StyleProvider>
      );
    }
  }
}
