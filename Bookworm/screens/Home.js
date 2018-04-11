import React from 'react';
import style from '../style';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

class Home extends React.Component {
  state = {}
  
  componentWillMount(){

  }

  render() {
    return (
     <View>
  	   <Text>Home</Text>
     </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}


export default connect(mapStateToProps)(Home);