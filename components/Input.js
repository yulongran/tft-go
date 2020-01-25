import React from 'react';
import {View , TextInput} from 'react-native';

class InputWithIcon extends React.Component{
    render(){
        return(
            <View>
                    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={"Hello"}
    />
            </View>
        )
    }
}
export default InputWithIcon;