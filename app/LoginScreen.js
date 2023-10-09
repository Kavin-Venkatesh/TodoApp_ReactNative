import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import Colors from './color';



  const LoginScreen=({navigation})=>{

  const handleLogin = () => {
    navigation.navigate('Home');
  };

    return (
      <View style={styles.container}> 
      <Text style={styles.slogan}>TaskZen</Text>
      <Text style={styles.sloganText}>Organize Your Life, One Task at a Time</Text>
      <TouchableOpacity style={styles.Button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
      justifyContent: 'center',
    },
    slogan:{
      color: "#FFFFFF",
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    Button:{
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginBottom: 20,
      width: '50%',
      alignSelf: 'center',

    },
    buttonText:{
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    sloganText:{
      color: "#FFFFFF",
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 40,
    },
  });
  
export default LoginScreen;