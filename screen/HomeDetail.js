import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const HomeDetail =({post,navigation}) => {
    return(
        <View style={styles.cardContainerStyle}>
            <View style={[styles.thumbnailContainerStyle,styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri:post.profile
                    }}
                />
                 <Text style={{fontWeight:"bold" ,marginTop:13,marginLeft:5,width:130}}>{post.id}</Text>
                <Image 
                    style={styles.moreStyle}
                    source={{
                        uri:"https://github.com/fanteam/app-wk4-ig/blob/master/img/post_title_right.jpg?raw=true"
                    }}
                />
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri:post.main_img
                    }}
                />
            </View>
            <View style={styles.cardSectionStyle}>
                <View style={styles.postBars}>
                <Image
                    style={styles.postBarStyle}
                    source={{
                        uri:"https://github.com/fanteam/app-wk4-ig/blob/master/img/like.jpg?raw=true"
                    }}
                />
                <Image
                    style={styles.postBarStylea}
                    source={{
                        uri:"https://github.com/fanteam/app-wk4-ig/blob/master/img/chat.jpg?raw=true"
                    }}
                />
                <Image
                    style={styles.postBarStyle}
                    source={{
                        uri:"https://github.com/fanteam/app-wk4-ig/blob/master/img/plant.jpg?raw=true"
                    }}
                />
                <Image
                    style={styles.postBarStyleb}
                    source={{
                        uri:"https://github.com/fanteam/app-wk4-ig/blob/master/img/ff.jpg?raw=true"
                    }}
                />
                </View>
            </View>
            <Text style={styles.postContentStyle}>{post.like} 次瀏覽</Text>
            <Text style={{marginLeft:15,marginRight:15}}>
                <Text style={{fontWeight:"bold"}}>{post.id}</Text>
                {post.content}
            </Text>
            <Text style={{color:"#999999",marginTop:5,marginLeft:15}}>{post.comment}</Text>
            <View style={styles.commentArea}>
                
                <Image
                    style={styles.commentProfile}
                    source={{
                        uri:"https://github.com/fanteam/app-wk4-ig/blob/master/img/head.jpg?raw=true"
                    }}
                />
                <Text style={styles.commentReplytxt}>留言回應......</Text>
                <Image
                    style={styles.commentIcon}
                    source={{
                        uri:"https://github.com/fanteam/app-wk4-ig/blob/master/img/commentright.jpg?raw=true"
                    }}
                />
               
            </View>
            <Text style={{marginLeft:15,marginBottom:15,fontSize:10,marginTop:0}}>
                <Text style={{color:"#999999"}}>{post.time}前 • </Text><Text> 翻譯年糕</Text>
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
    cardContainerStyle:{
        marginTop:8,
        backgroundColor:"#fff",
    },
    thumbnailContainerStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    cardSectionStyle:{
        padding:0,
        backgroundColor:"#fff",
    },
    thumbnailStyle:{
        height:45,
        width:45,
        marginLeft:8,
        marginTop:0,
       
    },
    imageStyle:{
        marginTop:2,
        height:450,
        width:360,
    },
    moreStyle:{
        height:40,
        width:40,
      marginTop:2,
        marginLeft:120
      
    },
    postBars:{
        marginTop:5,
        marginLeft:15,
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    postBarStyle:{
        marginTop:7,
        height:30,
        width:30
    },
    postBarStylea:{
        height:40,
        width:40
    },
    postBarStyleb:{
        height:40,
        width:40,
        marginLeft:190
    },
    postContentStyle:{
        marginTop:7,
        fontWeight:"bold",
        marginLeft:15,
    },
    commentArea:{
        marginLeft:15,
        marginTop:5,
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    commentProfile:{
        height:35,
        width:35,
    },
   
    commentReplytxt:{
       marginLeft:8,
       marginRight:115,
       marginTop:7,
       color:"#999999",
       height:40,
       fontSize:14
      
    },
    commentIcon:{
        height:30,
        width:100,
    }
});

export default HomeDetail;