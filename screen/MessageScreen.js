import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,ScrollView } from 'react-native';
import headerData from "../json/header.json";


const MessageScreen = ({navigation}) => {
    return(
        
 <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Image source={{uri: headerData.MessagePage.HeaderLeftUrl}}
                            style={styles.headerLeft}/>
                </TouchableOpacity>
                <Image source={{uri: headerData.MessagePage.HeaderRightUrl}} style={styles.headerRight}/>               
            </View>
            <ScrollView>
            <View  style={{marginTop:0}}>
                <Image
                    source={{uri: "https://github.com/fanteam/app-wk4-ig/blob/master/img/mm3.jpg?raw=true"}} 
                    style={styles.mesList}
                />
            </View>
            </ScrollView>
            
        </View>
        
       
    );
};
const styles = StyleSheet.create({
    headerRight:{
        marginTop:20,
        width: 315,
        height: 25
      },
      headerLeft:{
        marginTop:18,
        marginRight: 0,
        marginLeft:10,
        width: 30,
        height: 30
      },
      headerContentStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        width:360,
        height:60,
        backgroundColor:'#fafafa',
        marginTop:15,
        elevation:4

    },
    mesList:{
        marginTop:5,
        width:360,
        height:550,
        marginLeft:1,
        marginRight:0,
        
    },
});
export default MessageScreen;