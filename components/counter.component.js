import React, {useState} from 'react';
import {Container, Content, Text, Button} from 'native-base';


export default function Counter(){
    const [count, setCount] = useState(0);
    function onPressInc(){
        setCount(count+1);
    }
    function onPressDec(){
        setCount(count-1);
    }
    function onPressReset(){
        setCount(0);
    }
    return (
        <Container>
            <Content>
                <Text>Simple Counter</Text>
                <Text>{count}</Text>
                <Button onPress={onPressDec}><Text>Dec (-)</Text></Button>
                <Button onPress={onPressInc}><Text>Inc (+)</Text></Button>
                <Button onPress={onPressReset}><Text>Reset</Text></Button>
            </Content>
        </Container>
    );
}