import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React, { Component } from 'react';
import './App.scss'
const MoviesInfo =(movie)  =>{
    const targetMovie = movie.route.params.movie;
    return(
        <div className="MoviesInfoScreen">
            <div style={{
                       backgroundColor:'#dddddd',
                       padding:5,
            }}> 
                <h1 style ={{textAlign:'center'}}>{targetMovie.Title}</h1>
            </div>      
            <View style={styles.containers}>
                <Image style ={styles.image} source ={{uri: targetMovie.Poster}}/>
                <Text style={styles.yearTextarea}>Year: {targetMovie.Year}</Text>
            </View>  
        </div>
 
    )
}
export default MoviesInfo;

const styles = StyleSheet.create({
    containers :{
        justifyContent : 'center', alignItems: 'center', backgroundColor: '#959595'
    },
    image :{
        width : 170, height: 200, margin:10, borderRadius:5,
    },
    titleTextarea : {
        fontSize: 10,fontWeight: 'bold',paddingLeft:10, color: '#fff'
    }, 
    yearTextarea : {
        paddingLeft:10,  color: '#fff', fontWeight: 'bold'
    }
  })