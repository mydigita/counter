import React, {useState} from 'react';
import {Container, Content, Text, Button, Input} from 'native-base';


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
                <Text>{count}</Text>
                <Button onPress={onPressDec}><Text>Dec (-)</Text></Button>
                <Button onPress={onPressInc}><Text>Inc (+)</Text></Button>
                <Input keyboardType="numeric" value={countVar} onChange={onChangeCountVar}/>
                <Button block danger onPress={onPressResetCount}><Text>Reset Result</Text></Button>
                <Button block warning onPress={onPressResetCountVar}><Text>Reset Variation</Text></Button>
            </Content>
        </Container>
    );
}