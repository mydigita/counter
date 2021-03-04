import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Header, Footer, FooterTab, Button, Text, Title, Body, Left, Right} from 'native-base';
import Counter from './components/counter.component.js';


export default function App() {
  return (
    <Container>
      <Header>
        <Left/>    
        <Body>
            <Title>Counter App</Title>
        </Body>
        <Right/> 
      </Header>
      <Content>
        <Counter/>
      </Content>
      
      <Footer>
          <FooterTab>
            <Button full>
              <Text>dev: tradecoder</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inlineButton:{
    flex:1,
    flexDirection:'row',
  }
});
