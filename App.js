/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PlaidLink from 'react-native-plaid-link-sdk';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}} >
        <Text style={styles.title}>Plaid Integration</Text>
        <View style={{flex:1, justifyContent:"center"}}>
        <View style={{alignSelf:"center"}}>
            <PlaidLink
            tokenConfig={{
                token: 'link-sandbox-2ab031f3-533d-423a-b9c0-9a3d32c20635',
            }}
            onSuccess={(success) => {
                console.log(success);
            }}
            onExit={(exit) => {
                console.log(exit);
            }}>
            <Text style={styles.addAccount}>Add Account</Text>
            </PlaidLink>
        </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 title:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginTop:20
 },
 addAccount:{
    backgroundColor:'black',
    color:'white',
    paddingHorizontal:20,
    paddingVertical:10,
    alignSelf:'center',
    fontWeight:'bold'
 }
});

export default App;
