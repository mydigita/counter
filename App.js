import React, {useState, useEffect} from 'react';
import { ThemeProvider, Header, Text, Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { SafeAreaProvider } from 'react-native-safe-area-context';



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
        <SafeAreaProvider>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Counter App', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Grid>
                <Row style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text h1>{count}</Text>
                </Row>
                <Row>                    
                    <Col>
                        <Button title="Dec (-)" onPress={onPressDec}/>
                    </Col>
                    <Col>
                        <Button title="Inc (+)" onPress={onPressInc}/>
                    </Col>                            
                </Row>
                <Row>
                    <Button title="Reset Count" onPress={onPressResetCount}/>  
                </Row>
            </Grid>
        </SafeAreaProvider>
    );
}
