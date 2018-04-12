import React from 'react';
import style from '../style';
import RootNavigator from '../nav/RootNavigator';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import * as firebase from 'firebase';
import firebaseConfig from '../config/firebase.js';
firebase.initializeApp(firebaseConfig);
import { View, Text, TouchableOpacity } from 'react-native';

class Login extends React.Component {
	state = {}
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.props.dispatch(login(user))
      }
    });
  }

  login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('815516641982277', {
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
    if(this.props.loggedIn){
      return (
        <RootNavigator/>
      )
    } else {
      return (
        <View style={style.container}>
          <TouchableOpacity onPress={this.login.bind(this)}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      )      
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

export default connect(mapStateToProps)(Login);