import React from 'react';
import {Text, StyleSheet} from 'react-native'




const HeaderStyledButton = ({ColorValue,TextValue}) => {
    return <Text style={[styles.styling,{backgroundColor:ColorValue}]}>{TextValue}</Text>;
}

const styles=StyleSheet.create({
    styling:{
        alignSelf:'center',fontSize:18,marginBottom:5,color:'white',textAlign:'center',textAlignVertical:'center',padding:10,marginTop:20,borderRadius:5,borderTopRightRadius:20,borderTopLeftRadius:20
    }
})

export default HeaderStyledButton;