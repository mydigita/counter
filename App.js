import React, {useState} from 'react';
import {Container, Header, Title, Icon, Left, Right, Body, Footer, FooterTab, Content, Text, Button, Form, Item, Input, Label,  Grid, Row, Col, H1} from 'native-base';


export default function App(){
    const [count, setCount] = useState(0);
    const [countVar, setCountVar] = useState(1);
    function onPressInc(){
        setCount(count + countVar);
    }
    function onPressDec(){
        setCount(count - countVar);
    }
    function onPressResetCount(){
        setCount(0);       
    }
    function onPressResetCountVar(){
        setCountVar(1);
    }
    function onChangeCountVar(e){
        setCountVar(Number(e.target.value))
    }
    return (
        <Container>

          <Header>      
            <Body >
              <Title style={{ alignSelf: 'center'}}>Counter App</Title>
            </Body>
          </Header>
            <Content padder>
                <Body style={{paddingBottom:'80px', paddingTop:'20px'}}>
                <H1 style={{fontSize:'40px'}}>{count}</H1>
                </Body>
                <Grid style={{paddingBottom:'20px'}}>
                    <Row>
                        <Col>
                        <Body>
                            <Button onPress={onPressDec}><Text>Dec (-)</Text></Button>
                        </Body>
                        </Col>
                        <Col>
                        <Body>
                            <Button onPress={onPressInc}><Text>Inc (+)</Text></Button>
                        </Body>
                        </Col>
                    </Row>
                </Grid>
          
                  <Button block danger onPress={onPressResetCount}><Text>Reset Result</Text></Button>
          
                <Form style={{paddingTop:'20px', paddingLeft:'0'}}>
                    <Item stackedLabel>
                        <Label>Increase / decrease by</Label>
                        <Input keyboardType="numeric" value={countVar} maxLength={12} onChange={onChangeCountVar}/>                       
                    </Item>
                </Form>
                <Button block warning onPress={onPressResetCountVar}><Text>Reset Variation</Text></Button>           
            </Content>

            <Footer>
              <FooterTab>
                <Body>
                <Text>Dev: TradeCoder</Text>
                </Body>
              </FooterTab>
            </Footer>
        </Container>
    );
}

  