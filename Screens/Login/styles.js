import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
      },
      header: {
          flex: 2,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 30
      },

      logo: {
        width: 180,
        height: 90,
        marginHorizontal: 85,
        marginBottom: 20
    },

      footer: {
          flex: 2,
          backgroundColor: '#3F2C92',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 30,
      },
      text_header: {
          color: '#3F2C92',
          fontWeight: 'bold',
          fontSize: 25,
      },

      text_footer: {
          color: 'white',
          fontSize: 18
      },
      action: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          paddingBottom: 5
      },
      actionError: {
          flexDirection: 'row',
          marginTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#FF0000',
          paddingBottom: 5
      },
      textInput: {
          flex: 1,
          marginTop: -12 ,
          paddingLeft: 10,
          color: 'white',
          
      },
      errorMsg: {
          color: '#FF0000',
          fontSize: 14,
      },
      button: {
          alignItems: 'center',
          marginTop: 50,
      },
      signIn: {
          width: '80%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          backgroundColor: '#B97FF2'
      },
      textSign: {
          fontSize: 18,
          fontWeight: 'bold',
          color:'white'
      }
}) 

export default styles;