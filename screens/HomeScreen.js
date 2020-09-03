import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            text:' ',
            isSearchPressed: false,
            lexicalCategory:' ',
            examples : [],
            definition: " ",
        }
    }
    
    getWord=(word)=>{
            var url="https://whitehat-dictionary.glitch.me/?word=" + word
            return fetch(url)
            .then((data)=>{
                return data.json()
            })
            .then((response)=>{
                var responseObject = JSON.parse(response);
                var word = dictionary[text][word]
                var lexicalCategory = dictionary[text]["lexicalCategory"]
                var definition = dictionary[text]["lexicalCategory"]
                this.setState({
                    "word":word,
                    "lexicalCategory":lexicalCategory,
                    "definition" :definition
                });
            })
    }
    
    
    render(){
        return(
            <View>
            <View>
                <Text>
                    Word:{" "}
                </Text>
                <Text style={{fontSize:18}}>
                    {this.state.word}
                </Text>
            </View>

            <View>
            <Text>
                Type:{" "}
            </Text>
            <Text style={{fontSize:18}}>
                {this.state.lexicalCategory}
            </Text>
        </View>

        <View>
            <Text>
                Definition:{" "}
            </Text>
            <Text style={{fontSize:18}}>
                {this.state.definition}
            </Text>
        </View>
            <View>
                <TextInput
          style={styles.inputBox}
          onChangeText={text=> {
              this.setState({
                  text: text,
                  isSearchPressed: false,
                  word: "Loading...",
                  lexicalCategory : ' ',
                  examples :[],
                  definition: ' '
              });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
        style={styles.searchButton}
            onPress={()=>{
                this.setState({isSearchPressed: true});
                this.getWord(this.state.text)
            }}>
            <Text>Search</Text>
        </TouchableOpacity>
            </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    inputBox:{
        backgroundColor:"yellow",
        width:"200%",
        height:40,
        textAlign:'center',
        alignSelf:'center'
    },

    searchButton:{
        backgroundColor:"green",
        width:"80%",
        height:"40%",
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        marginLeft:20
    }
})