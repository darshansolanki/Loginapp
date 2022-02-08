import React, { useEffect, useContext, useState} from 'react'
import { View, SafeAreaView, Alert} from 'react-native';
import styles from './styles';
import {Avatar, Title, Caption, TouchableRipple, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext} from '../../api/context';
import authStorage from '../../api/storage';
import axios from 'axios';
import { cos } from 'react-native-reanimated';

const ProfileScreen = () => {

        const authcontext = useContext(AuthContext);
        const [User, setUser] = useState({});

    const getDetails = async() => {
         const token = await authStorage.getToken(); 

         let headers = {
            'Authorization': `Bearer ${token}`,
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
            const response = await axios.get('https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/getProfile',{headers: headers});
    
                console.log();
                setUser(response.data.data);
                
        } catch (error) {
            console.log(error);
        }   
       
    }

    

    useEffect(() => {

            getDetails();

    },[]);


    return (     
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row', marginTop:25}}>
                    <Avatar.Image 
                        source={{ uri:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEKWsrQjrLklNeCqRe4FXVCTLKzyQaXWqwWUDyFvq8e1YXaPFu-thyqOzkiwXLshME9H0&usqp=CAU` }}
                        size={45}
                    />

                    <View style={{marginLeft:20, }}>
                     <Title style={[styles.title, {
                         marginTop:5,
                         marginBottom: 5,
                         marginLeft:-7
                     }]}> {User.name} </Title>


                     <Caption style={styles.caption}>Clientcode:{User.clientcode}  </Caption>
                     </View>
                </View>

            </View>

                    <View style={styles.infoBoxWrapper}></View>

                    <TouchableRipple onPress={() => alert('Do you want to Logout', 'ok')}>
                            <View style={styles.menuItem}>
                                <Icon name='logout' color='black' size={30} />
                                <Text style={styles.menuItemText}>Logout</Text>
                            </View>  
                
                    </TouchableRipple>

            
        </SafeAreaView>
    )
}

export default ProfileScreen;
