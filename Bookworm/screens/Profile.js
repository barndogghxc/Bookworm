import React from 'react';
import style from '../style'
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { uploadImages } from '../redux/actions';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';

class Profile extends React.Component {
  state = {}

  deleteImage(){
    this.self.props.dispatch(deleteImage(this.self.props.user.images, this.key))
  }

  addImage(){
    this.props.dispatch(uploadImages(this.props.user.images))
  }

  render() {
    return (
      <ScrollView>
        <View style={[style.container, style.center]}>
          <View style={style.container}>
            <Text style={[style.center, style.bold]} >{this.props.user.name}</Text>
            <Image style={style.img} source={{uri: this.props.user.photoUrl}}/>
          </View>
          <View style={style.imgRow}>
            {this.props.user.images.map((uri, key)=>{
              return (
                <TouchableOpacity key={{key}} onPress={this.deleteImage.bind({self: this, key: key })} >
                  <Image style={style.img} source={{uri: uri}} />
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity style={[style.img, style.center]} onPress={this.addImage.bind(this)}>
              <Ionicons name="ios-add" size={75}  style={style.color} />
            </TouchableOpacity>
          </View>
          <Text style={style.bold}>About</Text>
          <Text style={style.bold}>Currently Reading</Text>
          <Text style={style.bold}>Favorite Books</Text>
          <TextInput/>
        </View>
        <TouchableOpacity>
          <Text style={ style.button }>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Profile);




