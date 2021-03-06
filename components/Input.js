import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({label, placeholder, ...props}) => (
  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center', marginTop: 12}}> 
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.Input} placeholder={placeholder} {...props} />
  </View>
)

const styles = StyleSheet.create({
  Input: {
    width: '100%',
    paddingVertical: 9,
    paddingTop: 24,
    paddingLeft: 9,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ccc'
  },
  label: {
    position: 'absolute',
    top: 8,
    left: 8,
    color: '#999',
    fontSize: 12,
    textTransform: 'uppercase',
  }
});


export default Input;
