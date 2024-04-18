import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [firstWidth, setWidth] = React.useState(0); 

  const onLayout = (event) => { 
    const { width } = event.nativeEvent.layout; 
    setWidth(width); 
    console.log(width) 
  }; 

  return (
    <View style={styles.container}>
      {/* <View 
        style={{backgroundColor:'#FFE382', alignItems:'center', justifyContent:'center', height: firstWidth, width:'30%', borderRadius:0, }}
        onLayout={onLayout}
      >
      </View> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
