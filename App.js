import React, {useState, useEffect} from 'react';
import { ThemeProvider, Header, Text, Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";



export default function App(){
    const [count, setCount] = useState(0);
    const [countVar, setCountVar] = useState(1);
    function onPressInc(){
        setCount(count+countVar);
    }
    function onPressDec(){
        setCount(count-countVar);
    }
    function onPressResetCount(){
        setCount(0);       
    }
    function onPressResetCountVar(){
        setCountVar(1);
    }
    function onChangeCountVar(e){
        if(e===""){
            setCountVar(1)
        } else{
        setCountVar(parseInt(e))
    }
    }
    
    return (
   
            <ThemeProvider theme={theme}>
            <Header
               
                centerComponent={{ text: 'Counter App', style: { color: 'white', fontSize:30 } }}
                rightComponent={{text:'1.0', style:{color:'white', fontSize:20}}}
               
            />
            <Grid>
                <Row style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text h1>{count}</Text>
                </Row>
                <Row style={{padding:10}}>   
                    <Col>
                        <Button type='solid' title="Dec (-)" onPress={onPressDec}/>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Button type='solid' title="Inc (+)" onPress={onPressInc} />
                    </Col>                            
                </Row>
                <Row style={{padding:10}}>                    
                    <Col>
                        <Button type='outline' title="Reset Count" onPress={onPressResetCount}/>
                    </Col>
                </Row>
                <Row style={{padding:10}}>
                    <Col>
                    <Text>Inc/Dec. by</Text>
                    
                       <Input style={{fontSize:30, color:'red'}} keyboardType="numeric" onChangeText={onChangeCountVar}/>
                    </Col>
                    <Col>
                       <Button type='outline' title="Reset" onPress={onPressResetCountVar}/>                     
                    </Col>                    
                </Row>
                
                <Row style={{justifyContent:'center', alignItems:'center', backgroundColor:'#2171EE', height:60}}>
                    <Text style={{color:'white', fontSize:20}}>tradecoder.com</Text>
                </Row>
            </Grid>
            </ThemeProvider>

    );
}

const theme = {
    Button: {
      raised: true,
      color: 'auto',
      titleStyle:{          
          fontSize:30,
      },
      Input:{
          color:'red',
      }
    },
  };
