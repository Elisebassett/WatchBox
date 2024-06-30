import { React, useState, useEffect } from 'react';
import { View, Button, FlatList, Item, StyleSheet, StatusBar, Text, Image, SafeAreaView, Dimensions } from 'react-native';
import { SearchBar, Card } from '@rneui/themed';

export default function MovieAPI () {
    const [ searchInput, setSearchInput ] = useState('')
    const [ movieData, setMovieData ] = useState({})

    useEffect(() => {
        const getMovies = async() => {
//            await getMoviesFromOMDBApiApi()
            await getMoviesFromTMDBApi()
        }
        if(searchInput){ getMovies() }
    }, [searchInput])

    useEffect(() => {
        if(movieData) { console.log("MOVIE DATA: ", movieData) }
    }, [movieData])

    const performSearch = async(search) => {
        console.log("search: ", search)
        await setSearchInput(search);
    }

    const getMoviesFromOMDBApi = async () => {
            console.log("GET MOVIES for search: ", searchInput)

//        var urlTest = 'https://reactnative.dev/movies.json';
        var omdbapiURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=';
        var omdbapiKey = '1cb1ed8a';

        var url = omdbapiURL
        var key = omdbapiKey

        let title;
        let year;
        let type;
        let page = '1'
        let plot = 'short' // : 'full'

        return fetch(url + key +
//        '&t=' + title +
//        '&y=' + year +
//        '&type=' + type +
//        '&plot=' + plot +
        '&s=' + searchInput +
        '&page=' + page)
        .then(response => response.json())
        .then(async (json) => {
            if(!json.Error) {
//                console.log("json.search: ", json.Search)
                await setMovieData(json.Search)
            } else {
                console.log("json: ", json)
            }
        })
        .catch(error => {
          console.error('ERROR getting movies from API: ', error);
        });
    }
    const getMoviesFromTMDBApi = async () => {
        var tmdbURL    = 'https://api.themoviedb.org'
        var tmdbKey    = '4d86dcfa66c30b6efb5a15c596f1ad84'
        var tmdbROKey  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDg2ZGNmYTY2YzMwYjZlZmI1YTE1YzU5NmYxYWQ4NCIsInN1YiI6IjY1ZTExYTE4ZGFmNTdjMDBjYTlhYWFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pA_uvKq54YsqTz13FYlnogkHGCmAK_h0iVIoy_YveeQ'

        var apiVersion    = '/3' // '/4'
        var searchType    = '/search' // '/discover' | '/find'
        var subSearch     = '/movie?'
        var query         = 'query=' + searchInput
        var include_adult = '&include_adult=false' //true
        var language      = '&language=' + 'en-US'
        var page          = '&page=1'

        let response = fetch(
            tmdbURL +
            apiVersion +
            searchType +
            subSearch +
            query +
            include_adult,
            {
                headers: {
                    Authorization: "Bearer " + tmdbROKey
                }
            }
        ).then(response => response.json())
        .then(async (json) => {
            //Filter Results

            let filteredResults = [];
            var preferredLanguage = 'en'

            //            console.log("json: ", json)
            //            console.log("json.results: ", json.results)

            json.results.forEach((item, i) => {
                if (item.original_language == preferredLanguage) {
                    filteredResults.push(item)
                }
            })
            await setMovieData(filteredResults)
        })
        .catch(error => {
            console.error('ERROR getting movies from API: ', error);
        });
    }

    const numColumns = 2

    const Flatlist = () => {
      if(movieData) {console.log(movieData)}
      if(movieData && movieData.length > 0) {
        console.log("RETURNING FLATLIST: ", movieData)
        console.log("Flatlist for: ", searchInput)
          return(
            <SafeAreaView style={styles.list}>
                <FlatList
                    data={movieData}
                    style={styles.list}
                    numColumns={numColumns}
                    renderItem={({item}) => {
                        console.log("ITEM: ", item)
                        return (
                            <View key={item.id}>
                                <Card>
                                    <Image
                                        style = {styles.image}
                                        resizeMode = "cover"
                                        source = {{ uri: "https://image.tmdb.org/t/p/w500" + item.poster_path}}
                                    />
                                </Card>
                                <Card.Divider />
                                <Text style={styles.title}>{item.original_title}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
          )
      }
    }

    const screenWidth = Dimensions.get("window").width
    const tileSize = screenWidth / numColumns

    const styles = StyleSheet.create({
          container: {
            flex: 1,
          },
          listContainer: {
            flex: 1,
            justifyContent: 'center',
            width: screenWidth
          },
          list: {
            flex: 1,
            flexDirection: 'column',
          },
          image: {
            justifyContent: 'center',
            alignItems: 'center',
            height: tileSize - 100,
            width: tileSize - 100
          },
          title: {
            padding: 5,
            fontSize: 15,
          },
          card: {
            marginBottom : 25,
            borderRadius : 15,
            overflow : 'hidden'
          }
        });

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <SearchBar
                  placeholder="Type Here..."
                   onChangeText={performSearch}
                   value={searchInput}
                />
            </View>
            <Flatlist />
        </SafeAreaView>
    );
}