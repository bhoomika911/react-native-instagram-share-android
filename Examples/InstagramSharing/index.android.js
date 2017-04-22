import React, { PropTypes , Component } from 'react';
import {   View, Text, Image, IntentAndroid , NativeModules, TouchableHighlight , AppRegistry } from 'react-native';

var CustomInstagramShare = require('react-native-instagram-share-android');

export default class InstagramShareApp extends Component {
    shareWithInstagram(){
      //***************put your file file path here*********************
      let mediaPath = "/storage/emulated/0/DCIM/Screenshots/IMG_20170419_213044.jpg";
      //****************************************************************

      CustomInstagramShare.shareWithInstagram(mediaPath,function(result){
        alert(result);
      });
    }

    render() {
        return (
            <View style={{flex : 1,justifyContent : 'center'}}>
              <TouchableHighlight onPress={() => this.shareWithInstagram()} style={{backgroundColor : 'black',borderRadius : 5,margin : 5,height : 50,alignItems : 'center',justifyContent : 'center'}}>
                <Text style={{color : 'white'}}>Share With Instagram</Text>
              </TouchableHighlight>
            </View>
        );
    }

}

AppRegistry.registerComponent('MyMaterialDesignRNative', () => InstagramShareApp);
