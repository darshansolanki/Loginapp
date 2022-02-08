import React, { useEffect, useContext, useState} from 'react'
import { View, Text } from 'react-native'
import {AuthContext} from '../../api/context';
import {useNavigation} from '@react-navigation/native';
import authStorage from '../../api/storage';
import axios from 'axios';
import LoginScreen from '../Login/LoginScreen';

const Dashboard = () => {

        const authcontext = useContext(AuthContext);
        const [Details, setDetails] = useState({});
        const navigation = useNavigation();


    getfunds = async() => {
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
           const response = await axios.get('https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/getRMS', {headers: headers});

           const res1 = await axios.get('https://apiconnect.angelbroking.com/rest/secure/angelbroking/portfolio/v1/getHolding',{headers: headers})
        
           console.log("New res", res1.data);


           setDetails(response.data.data);
           console.log(Details.availablecash);
               
       } catch (error) {
           console.log(error);
       }   

    }

    useEffect(() => {
        getfunds()
    },[])

    const availablecash = parseFloat(Details.availablecash);
    
    
    

    return (
        <View style={{flex: 1}}>
            
            <View style={{height:"10%", 
            borderBottomWidth: 0.5, 
            display:'flex', 
            justifyContent:'space-between', 
            flexDirection:'row', 
            alignItems:'center',
            borderBottomRightRadius:12, 
            borderBottomLeftRadius:12,
            backgroundColor:'#002146',
            
            }}>
                
                <View style={{borderRightColor:'white', borderRightWidth:1, width:"25%", height:"50%", alignItems:'center', }}>
                    
                    <View style={{marginTop:-10}}>
                    <Text style={{color:"white", fontSize:15, fontWeight:'bold'}} >
                        Cash  
                    </Text>
                    </View>
                    
                    <Text style={{color:"white", fontSize:17, paddingTop: 10,}}>
                        {availablecash} 
                    </Text>
                </View>


                <View style={{borderRightColor:'white', borderRightWidth:1, width:"25%", height:"50%", alignItems:'center', }}>
                    
                    <View style={{marginTop:-10}}>
                    <Text style={{color:"white", fontSize:15, fontWeight:'bold'}} >
                        Holdings 
                    </Text>
                    </View>
                    
                    <Text style={{color:"white", fontSize:17, paddingTop: 10,}}>
                        200000  
                    </Text>
                </View>
                
                <View style={{borderRightColor:'white', borderRightWidth:1, width:"25%", height:"50%", alignItems:'center', }}>
                    
                    <View style={{marginTop:-10}}>
                    <Text style={{color:"white", fontSize:15, fontWeight:'bold'}} >
                    P&L  
                    </Text>
                    </View>
                    <Text style={{color:"white", fontSize:17, paddingTop: 10,}}>
                        200  
                    </Text>
                </View>

                <View style={{width:"25%", height:"50%", alignItems:'center', }}>
                    
                    <View style={{marginTop:-10}}>
                    <Text style={{color:"white", fontSize:15, fontWeight:'bold'}} >
                    Percent % 
                    </Text>
                    </View>
                    <Text style={{color:"white", fontSize:18, paddingTop: 10,}}>
                        2%  
                    </Text>
                </View>


               
            </View>



            <Text>Gold</Text>
            <Text>USD</Text>
            <Text>SENSEX</Text>
            <Text>NIFTY 50</Text>
            <Text>Bank Nifty</Text>
            <Text>Nifty Fin</Text>
            <Text>Nifty PSU</Text>
            <Text>Nifty It</Text>
            <Text>Nifty Enegry</Text>
            <Text>Auto</Text>
            <Text>pahrma</Text>
            <Text>FMCG</Text>
            <Text>Metals</Text>
            <Text>Reality</Text>
            <Text>Media</Text>

        </View>
    )
}

export default Dashboard
