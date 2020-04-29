import React, {Component} from 'react';
import './App.css';
import {View, Text,StyleSheet} from 'react-native-web';


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello World</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            height:'100vh'
        }
});
