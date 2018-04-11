   import React from 'react';
import style from '../style';
import { View, Text, Alert } from 'react-native';
import RootNavigator from '../nav/RootNavigator';
import { connect } from 'react-redux';
import { login } from '../redux/actions'


class Login extends React.Component {
	state = {}
	
  componentWillMount(){}

	login = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1073004776175191', {
        permissions: ['public_profile'],
    	});
    if (type === 'success') {

    }
  } 
 
	render() {
    return (
	   <View style={style.container}>
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