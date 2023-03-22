import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
const MovieCard = ({movie}) => {
    const navigation = useNavigation();
    const moviecardTomovieInfo = () => {
        navigation.navigate('Details Screen',{movie});
      }
    return(
        <div className="MovieCardScreen">
            <View  style={styles.containers} 
            // style={{
            //             justifyContent : 'center',
            //             alignItems: 'center',
            // }}
            >
            <Pressable  onPress={moviecardTomovieInfo}>
                <Image 
                style ={{
                    fontSize:5,
                    width : 170,
                    height: 200,
                    margin:10,
                    borderRadius:5,
                }}
                source ={{uri: movie.Poster}}
                />
                </Pressable>
            <Text title={movie.Title} style={styles.titleTextarea}  >{movie.Title}</Text>
            <Text style={styles.yearTextarea}>{movie.Year}</Text>
            </View>
        </div>         
    )
}
export default MovieCard;

const styles = StyleSheet.create({
    containers :{
        justifyContent : 'center', alignItems: 'center',
    },
    titleTextarea : {
        fontSize: 10,fontWeight: 'bold',paddingLeft:10, color: '#fff'
    }, 
    yearTextarea : {
        paddingLeft:10,  color: '#fff', fontWeight: 'bold'
    }
  })


