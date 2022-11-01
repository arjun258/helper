import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Button,
  Alert
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/core";

import { ref, set } from 'firebase/database'
import { db } from './config';





        // let storyData = {
          
        //   title: this.state.title,
        //   description: this.state.description,
        //   story: this.state.story,
        //   moral: this.state.moral,
          
        //   created_on: new Date(),
          
        // };


let customFonts = {
  "Bubblegum-Sans": require('./BubblegumSans-Regular.ttf')
};

export default class CreateStory extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
        name: "",
     phoneNumber: "",
        workYouDo: "",
        Price: "",
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();

  }
  async addStory() {
    
    if (
      this.state.name &&
      this.state.phoneNumber &&
      this.state.workYouDo &&
      this.state.Price
    ) {
      let workData = {
        
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        workYouDo: this.state.workYouDo,
        price: this.state.Price,
      };
    
      
      set(ref(db, 'users/' + this.name),{
        workData
      }).then(() =>{
        alert("Work Added Successfully")
        this.props.navigation.navigate('Home')
      })
    
    
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }

    

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    
      return (
        <View
            style={styles.container}
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
             
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                  styles.appTitleText
                }
              >
                New Story
              </Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
             

              
                
              <View style={{ marginHorizontal: RFValue(10) }}>
                <TextInput
                  style={
                     styles.inputFont
                  }
                  onChangeText={text => this.setState({name:text})}
                  placeholder={"Name"}
                  placeholderTextColor={'white'}
                   
                  value = {this.state.name}
                  
    
               />
               <TextInput
                  style={[
                   styles.inputFont,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
                  onChangeText={text => this.setState({phoneNumber:text})}
                  placeholder={"PhoneNumber (Without 91+)"}
                  multiline={true}
                  numberOfLines={1}
                  maxLength={10}
                  type = {Number}
                  keyboardType={"number-pad"}
                
                  placeholderTextColor={
                    'white'
                  }
                  value = {this.state.phoneNumber}
                  />
                  
            
                <TextInput
                  style={[
                     styles.inputFont,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
                  onChangeText={text => this.setState({workYouDo:text})}
                  placeholder={"WorkYouDo"}
                  multiline={true}
                  numberOfLines={3}
                  placeholderTextColor={
                    'white'
                  }
                  value = {this.state.workYouDo}
                  
                />
                <TextInput
                  style={[
                    
                    styles.inputFont,
                    styles.inputFontExtra,
                    styles.inputTextBig
                  ]}
                  onChangeText={text => this.setState({Price:text})}
                  placeholder={"Price"}
                  multiline={false}
                  numberOfLines={1}
                  placeholderTextColor={
                    'white'
                  }
                  value = {this.state.Price}
                  
                />
              </View>
              <View style={styles.submitButton}>
                <Button
                
          title="Submit"
                  color="#841584"
                  onPress={() => this.addStory()}
                  
                />
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
//   containerLight: {
//     flex: 1,
//     backgroundColor: "white"
//   },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
//   appTitleTextLight: {
//     color: "black",
//     fontSize: RFValue(28),
//     fontFamily: "Bubblegum-Sans"
//   },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
//   inputFontLight: {
//     height: RFValue(40),
//     borderColor: "black",
//     borderWidth: RFValue(1),
//     borderRadius: RFValue(10),
//     paddingLeft: RFValue(10),
//     color: "black",
//     fontFamily: "Bubblegum-Sans"
//   },


  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
});
