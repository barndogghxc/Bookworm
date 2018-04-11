import React from 'react';
import style from '../style';
import { View, Text, Alert } from 'react-native';
import RootNavigator from './nav/RootNavigator';
import { connect } from 'react-redux';
import { login } from '../redux/actions'
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase.js'
firebase.initializeApp(firebaseConfig);

class Login extends React.Component {
	state = {}
	componentWillMount(){}

	login = async () => {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1073004776175191', {
          permissions: ['public_profile'],
      	});
      if (type === 'success') {
      	// Build Firebase credential with the Facebook access token.
      	const credential = await firebase.auth.FacebookAuthProvider.credential(token);

      	// Sign in with credential from the Facebook user.
      	firebase.auth().signInWithCredential(credential).catch((error) => {
        	// Handle Errors here.
        	Alert.alert("Try Again")
        });
      }
    } 

	render() {
      return (
	   <View>
		 <Text>Login</Text>
	   </View>
	  )
	}
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}
export default connect(mapStateToProps)(Login);