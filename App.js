import React from "react";
import { StyleSheet, Text, View, Image,TextInput,KeyboardAvoidingView,Button} from "react-native";

export default class App extends React.Component {
  constructor(props){ 
  super(props);
  
   this.handleOnChangeName=this.handleOnChangeName.bind(this);
   this.handleOnChangePassword=this.handleOnChangePassword.bind(this);
  }
  
  handleOnChangeName(name){
    this.setState({name:name})
  }
  handleOnChangePassword(password){
    this.setState({password}) 
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={{margin:15,}}>
        <Image source={require("./assets/img.jpg")} style={styles.image} />
        </View>
        <TextInput placeholder={"User Name"} style={styles.textInput} onChangeText={this.handleOnChangeName}/>
        <TextInput placeholder={"Password"}  style={[styles.textInput,{marginTop:5,}]} onChangeText={this.handleOnChangePassword} secureTextEntry={true}/>
        <View  style={styles.button}>
        <Button 
         title="Sign In"
         color="#0EA6B5"/>
         </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "black",
  },
  textInput:{
    borderWidth:1,
    width:250,
    height:45,
    borderStyle:'solid',
    paddingHorizontal:10,
    borderRadius:5,
    backgroundColor: "#242132",
  },
  button:{
    width:250,
    height:45,
    borderRadius:5,
    color:'black',
  },
});
