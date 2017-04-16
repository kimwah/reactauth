import React , { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB-I14DBTYmlx9rq_wYXE6NNcw_OiKlr4o",
            authDomain: "authentication-b1ae0.firebaseapp.com",
            databaseURL: "https://authentication-b1ae0.firebaseio.com",
            projectId: "authentication-b1ae0",
            storageBucket: "authentication-b1ae0.appspot.com",
            messagingSenderId: "1079381687357"
        });
    }
    render() {
        return (
        <View>
            <Header headerText="Authentication" />
            <Text style={{fontSize: 18, color: 'blue'}}>Auth App</Text>
        </View> 
        );   
    }
}

export default App;