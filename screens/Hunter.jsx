import {
  SafeAreaView,
  Image,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {useState,useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import * as Network from 'expo-network';
import {SystemSetting} from 'react-native-system-setting'
export default function Hunter(){
  const [loading,setLoading] = useState(false);
  const [ip,setIp] = useState("127.0.0.1");
  const [netSate,setNetState] = useState({});
  async function getDeviceInfo(){
    const ipInfo = await Network.getIpAddressAsync();
    setIp(ipInfo)
    const networkState = await Network.getNetworkStateAsync();
    console.log(networkState);
    setNetState(networkState)
  }
  useEffect(() =>{
    getDeviceInfo();
  },[ip])
  
  return(
    <SafeAreaView style={style.container}>
      <View style={{borderWidth:1,borderRadius:5,paddingVertical:10}}>
      <Text style={{textAlign:'center',fontSize:13,fontWeight:'bold',color:"white"}}>MY IP{"\n"}{ip}</Text>
      </View>
      {
        loading ? <>
        <ImageBackground source={require("../assets/cloud.png")} style={style.Image}>
        <ActivityIndicator color={"white"} size={30}/>
        </ImageBackground>
        <Text style={style.searchText}>Establishing Connection...</Text>
        </>
      : <Image 
          source={require("../assets/cloud.png")}
          style={style.Image}
        />
      }
      <Text>Paste or Type the ip address here</Text>
      <TextInput style={style.textInput} placeholder="10.x.x.x" multiline={true}/>
      {
        loading ? <View style={style.searchBtn}></View> :            <TouchableOpacity style={style.searchBtn}>
        <Text style={{fontWeight:'bold'}}>Start hunting</Text>
      </TouchableOpacity>
      }

       <StatusBar style={"light"}/>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  searchBtn:{
    alignSelf:'center',
    backgroundColor:'white',
    borderRadius:8,
    padding:20,
    marginTop:20,
    alignItems:'center',
    width:"100%"
  },
  textInput:{
    justifyContent:"flex-start",
    height:120,
    marginTop:10,
    padding:20,
    backgroundColor:'lightgrey',
    borderRadius:8
  },
  searchText:{
    color:'white',
    fontSize:12,
    textAlign:'center'
  },
  container:{
    flex:1,
    paddingTop:40,
    paddingHorizontal:20,
    backgroundColor:"#2C3639",
    alignContent:'center',
    justifyContent:'center'
  },
  Image:{
    height:120,
    width:120,
    alignSelf:"center",
    alignItems:'center',
    justifyContent:'center',
  }
})