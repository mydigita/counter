import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button, Form, Item, Input, Label, Left, Right, Body, Grid, Row, Col, H1} from 'native-base';


export default function Counter(){
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
            <Content padder>
                <Body>        
                <H1>{count}</H1>
                </Body>
                <Grid>
                    <Row>
                        <Col>
                        <Body>
                            <Button rounded onPress={onPressDec}><Text>Dec (-)</Text></Button>
                        </Body>
                        </Col>
                        <Col>
                        <Body>
                            <Button rounded onPress={onPressInc}><Text>Inc (+)</Text></Button>
                        </Body>
                        </Col>
                    </Row>
                </Grid>
                
       
         
                <Button block danger onPress={onPressResetCount}><Text>Reset Result</Text></Button>
                <Form>
                    <Item floatingLabel>
                        <Label>Increase / decrease by</Label>
                        <Input keyboardType="numeric" value={countVar} onChange={onChangeCountVar}/>
                    </Item>
                </Form>
                <Button block warning onPress={onPressResetCountVar}><Text>Reset Variation</Text></Button>
        
           
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  