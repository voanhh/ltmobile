// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello tran vo anh - 22810310207</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import {Button, View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView style={{
      marginTop: 50
    }}>
      <Text style={{
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'grey',
        fontSize: 30,
        fontWeight: 10,
        paddingBottom: 10,
        marginBottom: 40,
        

      }}>
        Đăng nhập</Text>
      <View>
        <Text
        style={{
          fontSize: 20,
        }}>Nhập số điện thoại</Text>
        <Text
        style={{
          fontSize: 15,
          marginTop: 10,
        }}>Dùng số điện thoại để đăng nhập hoặc đăng kí tài khoản tại OneHousing Pro</Text>

        <TextInput style={{
  
          marginTop: 30,
          marginBottom: 200,
          borderWidth: 0,
          borderBottomWidth: 1,
          borderColor: 'gray',
          padding: 10,
          
        }}
        inputMode='numeric'
        placeholder='Nhập số điện thoại'></TextInput>
      </View>
      <Button 
      title='Tiếp tục' 
      style = {{

      }}
      > 
      </Button>
    </ScrollView>
  );
};

export default App;
