import React,{useState} from 'react';
import {Text,Switch,StyleSheet,View} from 'react-native'
import CustomSwitch from '../settings/components/switch/index.js'


const index = () => {

    // const [VisibilityOne, setVisibilityOne] = useState(false)
    // const [VisibilityTwo, setVisibilityTwo] = useState(false)
    return <View style={styles.container}>
        
    <CustomSwitch TextHere="Student Notifications"></CustomSwitch>
    <CustomSwitch TextHere="Teacher Notifications"></CustomSwitch>
    
     
    {/* <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.TextStyle}>Student Notifications</Text>
        <Switch
        trackColor={{ false: "grey", true: "maroon" }}
        onValueChange={()=>setVisibilityTwo(previousState=>!previousState)}
        value={VisibilityTwo}
        />
    </View> */}



    </View>;

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:5,
        paddingTop:20,
        justifyContent:'space-around'
    }
})
export default index;