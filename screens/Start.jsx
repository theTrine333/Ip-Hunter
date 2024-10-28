import { Text,Image,TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";

const Start = ({navigation}) => {
   return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={require("../assets/Ip-icon.png")}
        style={styles.Image}
      />
      <Text style={styles.headerText}>Hunter</Text>
      <TouchableOpacity style={styles.textBtn} onPress={() =>{
        navigation.navigate("Hunter");
      }}>
        <Text style={{alignSelf:'center',fontSize:16,fontWeight:"bold"}}>Hunt</Text>
      </TouchableOpacity>
      <StatusBar style={"light"}/>
    </SafeAreaView>
  );
}
export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 8,
  },textBtn:{
    borderRadius:8,
    backgroundColor:"white",
    width:'40%',
    alignSelf:"center",
    padding:10,
    justifyContent:"center",
    position:'absolute',
    bottom:60,
  },
  headerText:{
    textAlign:'center',
    color:"white",
    fontWeight:"bold",
    fontSize:25,    
  },Image:{
    margin:10,
    height:120,alignSelf:'center'
  }
});