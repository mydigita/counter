import React, {useState} from 'react';
import {Container, Header, Title, Body, Footer, FooterTab, Content, Text, Button, Form, Item, Input, Label,  Grid, Row, Col, H1} from 'native-base';


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

          <Header style= {{backgroundColor:'#008080'}}>      
            <Body >
              <Title style= {{ alignSelf: 'center'}}>Counter App</Title>
            </Body>
          </Header>
            <Content padder>
                <Body>
                <H1>{count}</H1>
                </Body>
                <Grid>
                    <Row>
                        <Col>
                        <Body>
                            <Button bordered rounded  large onPress={onPressDec}><Text uppercase={false}>Dec. ( - )</Text></Button>
                        </Body>
                        </Col>
                        <Col>
                        <Body>
                            <Button bordered rounded  large onPress={onPressInc}><Text uppercase={false}>Inc. ( + )</Text></Button>
                        </Body>
                        </Col>
                    </Row>
                </Grid>
          
                  <Button block danger onPress={onPressResetCount}><Text uppercase={false}>Reset Result</Text></Button>
          
                <Form>
                    <Item stackedLabel>
                        <Label>Increase / decrease by</Label>
                        <Input keyboardType="numeric" placeholder='1' maxLength={12} onChange={onChangeCountVar}/>                       
                    </Item>
                </Form>
                <Button block danger onPress={onPressResetCountVar}><Text uppercase={false}>Reset Variation</Text></Button>           
            </Content>

            <Footer style={{backgroundColor:'#00182d'}}>
              <FooterTab>
                <Body>
                <Text style={{color:'silver'}}>By: Mamun @ TradeCoder</Text>
                </Body>
              </FooterTab>
            </Footer>
        </Container>
    );
}
