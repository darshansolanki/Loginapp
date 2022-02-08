import React from 'react'
import { View, Text } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Feeds from '../Screens/Feeds/Feeds';
import Reports from '../Screens/Reports/Reports';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 

const TabNavigator = (props) => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
          <Tab.Navigator 
             tabBarOptions={{
                    showLabel: false,
                     style:{height:55 }
                }}
          >
              <Tab.Screen
              name="Dashboard"
              component={Dashboard}
              options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                         <MaterialIcons name='dashboard' color={focused ? '#3F2C92' : '#748c94'} size={30} />
                       
                    <Text style={{color:focused ? '#3F2C92' : '#748c94', fontSize: 12}}>
                        Dashboard
                    </Text>
                    </View>
                )
            }}
              />

        
          <Tab.Screen
              name="Feeds"
              component={Feeds}
              options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <FontAwesome name='feed' color= {focused ? '#3F2C92' : '#748c94'} size={30} />
                      
                    <Text style={{color:focused ? '#3F2C92' : '#748c94', fontSize: 12}}>
                        Feeds
                    </Text>
                    </View>
                )
            }}
              />


          <Tab.Screen
              name="Reports"
              component={Reports}
              options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name='clipboard-pulse-outline' color= {focused ? '#3F2C92' : '#748c94'} size={30} />
                      
                    <Text style={{color:focused ? '#3F2C92' : '#748c94', fontSize: 12}}>
                        Reports
                    </Text>
                    </View>
                )
            }}
              />
          
          <Tab.Screen
              name="User"
              component={ProfileScreen}
              options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <Ionicons name='person-circle-outline' color= {focused ? '#3F2C92' : '#748c94'} size={30} />
                      
                    <Text style={{color:focused ? '#3F2C92' : '#748c94', fontSize: 12}}>
                        Profile
                    </Text>
                    </View>
                )
            }}
              />
          
          
          </Tab.Navigator>
          </NavigationContainer>
    )
}

export default TabNavigator;
