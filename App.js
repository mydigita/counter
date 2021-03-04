import React, {useState} from 'react';
import { ThemeProvider, Button, Input } from 'react-native-elements';


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
        <ThemeProvider>
            <h1>{count}</h1>
            <Button bordered rounded  large onPress={onPressDec}><Text uppercase={false}>Dec. ( - )</Text></Button>
                       
            <Button bordered rounded  large onPress={onPressInc}><Text uppercase={false}>Inc. ( + )</Text></Button>
                
          
            <Button block danger onPress={onPressResetCount}><Text uppercase={false}>Reset Result</Text></Button>
          
               
            <Input keyboardType="numeric" placeholder='1' maxLength={12} onChange={onChangeCountVar}/>                       
        
            <Button block danger onPress={onPressResetCountVar}><Text uppercase={false}>Reset Variation</Text></Button>           
          
        </ThemeProvider>
    );
}

  