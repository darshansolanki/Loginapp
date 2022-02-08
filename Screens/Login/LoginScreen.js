import React, {useContext, useState} from 'react';
import styles from './styles';
import { 
    View, 
    Text, 
    TouchableOpacity,
    StatusBar,
    TextInput,
    Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';
import authStorage from '../../api/storage';
import { AuthContext } from '../../api/context';
import axios from 'axios';



const LoginScreen = () => {


        const navigation = useNavigation();
        const [data, setData] = useState({
          clientcode:'',
          password: '',
          check_textInputChange: false,
          secureTextEntry: true
        })

        const authcontext = useContext(AuthContext);

        const loginHandle = async() => { 
          let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-UserType': 'USER',
            'X-SourceID': 'WEB',
            'X-ClientLocalIP': 'CLIENT_LOCAL_IP',
            'X-ClientPublicIP': 'CLIENT_PUBLIC_IP',
            'X-MACAddress': 'MAC_ADDRESS',
            'X-PrivateKey': '7ro6foX2'
          } 
         try {
          const response = await axios.post('https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword', {"clientcode": data.clientcode ,  "password":data.password}, {headers:headers});
       
          if(response.data.status){
            authcontext.setToken(response.data.data.jwtToken);
            authStorage.storeToken(response.data.data.jwtToken);
            navigation.navigate('MainTab');

          }else{
            Alert.alert('Login Error');
          }
         
         } catch (error) {
           Alert.alert(error);
         }
        }

        
        const textInputChange = (val) => {
          if(val.length !== 0) {
            setData({
              ...data,
              clientcode: val,
              check_textInputChange: true
            })
          } else {
            setData({
              ...data,
              clientcode: val,
              check_textInputChange: false
            })
          }
        }

        const passwordChange = (val) => {
          setData({
            ...data,
            password: val
          });
        } 

        const updateSecureTextEntry = () => {
            setData({
              ...data,
              secureTextEntry: !data.secureTextEntry
            });
        }

       

    return(
      <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
          <View style={styles.header}>
            <Text style={styles.text_header}>Welcome !</Text>
          </View>


        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}
        >
            <Text style={styles.text_footer}>UserName</Text>
            <View style={styles.action}>
              <FontAwesome name='user' color='white' size={25} />

              <TextInput 
              placeholder='Your clientcode' 
              placeholderTextColor="#fff"  
              style={styles.textInput} 
              value={data.clientcode}
              onChangeText={(val) => textInputChange(val)}
              />

              {data.check_textInputChange ?
              <Animatable.View animation="bounceIn">
              <Feather 
                name='check-circle'
                color='#4CDBE5'
                size={20}
              /> 
             </Animatable.View> :   null }

            </View>


            <Text style={[styles.text_footer, {marginTop: 30}]}>Password</Text>
            <View style={styles.action}>
              <FontAwesome 
              name='lock' 
              color='white' 
              size={25} />

              <TextInput 
              placeholder='Your Password' 
              secureTextEntry={data.secureTextEntry ? true : false}
              placeholderTextColor="#fff"  
              style={styles.textInput} 
              value={data.password}
              onChangeText={(val) => passwordChange(val)}
              />

            <TouchableOpacity
              onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ?
              <Feather 
                name='eye-off'
                color='#4CDBE5'
                size={20}
              /> 
              :
              <Feather name="eye" 
              color='#4CDBE5'
              size={20}  />
                }
              </TouchableOpacity>
            </View>

                <View style={styles.button}>

                <TouchableOpacity style={styles.signIn}  
                onPress={() => loginHandle()}>                  
                      <Text style={styles.textSign}>Login</Text>

                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}}>
                 <Text style={[styles.text_footer, {marginTop: 10, fontSize: 17,}]} >
                 Create Account !
                  </Text>
            </TouchableOpacity>
            
            
          </Animatable.View>
      </View>
    )
}

export default LoginScreen; 
