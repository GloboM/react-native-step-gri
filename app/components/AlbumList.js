
import React, { Component } from 'react';
import  axios  from 'axios';
import { View, Text } from 'react-native';


class AlbumList extends Component{

  state = { albums:[]};

  componentWillMount(){
    axios.get('https://rallyCoding.herokuapp.com/api/music_albums')
    .then( response => this.setState({albums:response.data}))
  }
  renderMe(albums){
    return(
      <Text>{albums.length}</Text>
    )

  }
  render(){
    console.log(this.state.albums)
    return(
      <View>
        <Text>{this.renderMe(this.state.albums)}</Text>
      </View>
    )
  }


}


export default AlbumList;
