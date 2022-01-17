import React,{useState} from 'react';
import {Text,Switch,StyleSheet,View} from 'react-native'


const index = ({TextHere}) => {

    const [Visibility, setVisibility] = useState(false)

    return <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.TextStyle}>{TextHere}</Text>
        <Switch
        trackColor={{ false: "grey", true: "maroon" }}
        onValueChange={()=>setVisibility(previousState=>!previousState)}
        value={Visibility}
        />
    </View>;
}

const styles=StyleSheet.create({
    TextStyle:{
        fontSize:20,
        color:'maroon'
    }
})
export default index;