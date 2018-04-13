import React from 'react';
import style from '../style';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class Home extends React.Component {
  state = {}
  
  componentWillMount(){}

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