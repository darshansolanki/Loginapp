import * as SecureStore from 'expo-secure-store';

const key  = "refeshtoken";

const storeToken = async(authToken) => {
    try{
        await SecureStore.setItemAsync(key, authToken);
        console.log('store Token', authToken)
    } catch(error) {
        console.log('Error in storing token', error);
    }
}

const getToken = async() => {
    try {
        return await SecureStore.getItemAsync(key);        
    } catch (error) {
        console.log('Error Getting the Token',error);
    }
}


const removeToken = async() => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log('Error Removing the Token',error);
    }
}


export default {
    getToken,
    removeToken,
    storeToken
}