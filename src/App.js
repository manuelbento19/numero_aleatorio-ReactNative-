import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [numero,setNumero] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={styles.bar} backgroundColor="#FF0000"/>
      <Text style={styles.texto}>{numero}</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>setNumero(Math.floor(Math.random()*100))}>
        <Text style={styles.btn_text}>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF0000',
    paddingHorizontal:40
  },
  texto:{
    fontSize:38,
    fontWeight:'bold',
    color:'#fff',
    marginBottom:5  
  },
  btn:{
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#fff"
  },
  btn_text:{
    fontSize:14,
    color:'#000',
    fontWeight:'bold'
  }
});

export default App;
