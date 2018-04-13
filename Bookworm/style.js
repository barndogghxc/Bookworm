import React from 'react';
import { StyleSheet } from 'react-native';
let Dimensions = require('Dimensions');
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

let style = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
  	width: 90,
  	height: 95,
  	borderRadius: 45,
  	margin: 12,
  	backgroundColor: '#ff69b4',
  },
  imgRow: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		padding: 13,
  },
  textInput: {
    width: deviceWidth,
    padding: 13,
    backgroundColor: '#fff',
    height: 95
  },
  bold: {
    padding: 13,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
	  borderRadius: 15,
	  borderWidth: 1,
	  borderColor: '#ff69b4',
	  textAlign: 'center',
	  color: '#ff69b4',
	  padding: 13,
	  margin: 12,
	  fontSize: 18,
	  fontWeight: 'bold',
  },
})

module.exports = style