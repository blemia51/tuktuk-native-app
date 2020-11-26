// Components/Search.js

import React from 'react';
import { StyleSheet, View, TextInput, Text, Image } from 'react-native';
import tuktukLogo from '../assets/tuk-tuk-logo.png';
import Button from './Button';

class Home extends React.Component {
  render() {
    console.log(this.props)
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        {/* <TextInput style={styles.textinput} placeholder='Titre du film'/>
        <Text style={styles.text}></Text> */}
        <Image source={tuktukLogo} style={styles.logo}/>
        <Button
          style={styles.button}
          title="S'inscrire" 
          onPress={() => {}}
          size="sm"
          backgroundColor="#007bff"
        />
        <Button 
          style={styles.button}
          title='Se connecter'
          onPress={() => {
            navigation.navigate('Login')}
          }
          size="sm" 
          backgroundColor="#007bff"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    paddingLeft: 5,
    marginTop: 12,
    paddingTop: 12
  },
  text: {
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    marginTop: 40,
    width: '100%',
    marginBottom: 20,
  },
  logo: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: 'center',
  }
});

export default Home;
