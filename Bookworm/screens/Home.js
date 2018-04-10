import React from 'react';
import style from '../style';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../redux/actions';

class Home extends React.Component {
  state = {}
  
  componentWillMount(){
  	this.props.dispatch(login("Read any good books lately?"))
  }

  render() {
    return (
     <View>
  	   <Text>{this.props.user}</Text>
     </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);