import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';
import Button from './Button';

class Login extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Connecte - toi ! </Text>
        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 100}}>
          <View style={{width: '80%'}}>
          <Input label='Identifiant' placeholder=''/>
          <Input label='Mot de passe' placeholder='' secureTextEntry/>
          </View>
          <Button
            style={styles.button}
            title="Connexion" 
            onPress={() => {}}
            size="sm"
            backgroundColor="#007bff"
            />
        </View>
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
  title: {
  textAlign: 'left',
  fontSize: 24,
  textTransform: 'uppercase',
  marginLeft: 5,
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
    marginTop: 120,
    marginBottom: 40,
    alignItems: 'center',
  }
});

export default Login;