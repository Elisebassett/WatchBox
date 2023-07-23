import React from 'react';
import {
  Button,
} from 'react-native';

export default function MovieAPI () {
    const urlTest = 'https://reactnative.dev/movies.json';
    const omdbapiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=';
    const apikey = '1cb1ed8a';
    let title;
    let year;
    let type;
    let plot = 'short' // : 'full'
    const getMoviesFromApi = () => {
      return fetch(omdbapiURL + apikey +
//        '&t=' + title +
//        '&y=' + year +
//        '&type=' + type +
//        '&plot=' + plot +
        '&s=' + 'men in black'
//        '&page='
      ).then(response => response.json())
        .then(json => {
        console.log(json)
          return json;
        })
        .catch(error => {
          console.error(error);
        });
    };

    return (
        <Button onPress={() => getMoviesFromApi()}
            title="See List"
        />
    );
}