# react-native-instagram-share-android

A React Native module that allows you to share image with instagram from android.


## Installation

```
npm i --save react-native-instagram-share-android
Link it to your android project
```

### Manual linking

In android/settings.gradle

```
...
include ':react-native-instagram-share-android', ':app'
project(':react-native-instagram-share-android').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-instagram-share-android/android')
```

In build.gradle

```
...
dependencies {
    ...
    compile project(':react-native-instagram-share-android')
}
```

In MainActivity.java

```
...
import android.app.Activity;              <-------- Add this line

public class MainActivity extends ReactActivity {
  public static Activity activity;        <-------- Add this line

    @Override
    protected String getMainComponentName() {
       activity = this;                   <-------- Add this line
        ...
    }
}

```

register module (in MainApplication.java)

Add the following import statement:

```
import bhumi.customInstagramShare.CustomInstagramSharePackage;   <---- Add this line

...and then add CustomInstagramSharePackage to exported package list (MainApplication.java#getPackages):

public class MainApplication extends Application implements ReactApplication {
    // (...)

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new CustomInstagramSharePackage(MainActivity.activity)        <------- Add this line
      );
    }
}
```

## Usage

```
import React, {
  AppRegistry,
  Component,
} from 'react-native';

var CustomInstagramShare = require('react-native-instagram-share-android');

class InstagramShareApp extends Component {
  shareWithInstagram(){
    let mediaPath = '--------- your file path -----------';
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

```

## Example

```
Try the included InstagramShare example yourself:

git clone https://github.com/bhoomika911/react-native-instagram-share-android.git
cd react-native-instagram-share-android/Examples/InstagramSharing
npm install
react-native run-android
```


## Properties

### mediaPath

Media File Path to share with instagram.
