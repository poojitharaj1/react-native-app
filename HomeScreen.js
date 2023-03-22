import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { fetchMovies } from "./API/index";
import { useState,useEffect } from "react";
import { TextInput } from "react-native-paper"
import MovieCard from "./MovieCard";

function HomeScreen() {
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState("batman");
      useEffect(() => {
        getMovies();
      }, []);
    const getMovies = async () => {
      setMovies(await fetchMovies(searchMovie));
      setSearchMovie("");
    };
  return (
    <div className="App">
    {Object.keys(movies).length >0 &&(
    <View style={styles.containers}>
      <TextInput placeholder="Seacrh your Movie here.." value = {searchMovie} onChangeText = {(text)=> setSearchMovie(text)} style = {{marginTop : 0, margin:50}} left =  {<TextInput.Icon name= "magnify" />}
      onSubmitEditing={getMovies}
      />
      <ScrollView
      contentContainerStyle = {{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      >
      {
        movies.Search.map((movie, i)=>(
          <MovieCard movie={movie} key = {i}/>
        ))
      }
      </ScrollView>
    </View>
    )}
  </div>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  containers :{
    backgroundColor: '#959595'
  },
  
})
