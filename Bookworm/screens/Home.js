import React from 'react';
import style from '../style';
import { View, Text } from 'react-native';

class Home extends React.Component {
	state = {}
	UNSAFE_componentDidMount(){}

	render() {
      return (
	   <View>
		 <Text>Bookworm</Text>
	   </View>
	  )
	}
}

export default Home;