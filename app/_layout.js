import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react'
import { Slot, Link } from 'expo-router';
import { Image } from 'expo-image';

const menuItems = ['home', 'mission', 'work', 'learn', 'careers']

const capitalizeFirstLetter = (word) => {
    const firstLetter = word.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()

    const remainingLetters = word.slice(1)

    return firstLetterCap + remainingLetters
}

const _layout = () => {
    const [winWidth, setWidth] = React.useState(0); 
    const [winHeight, setHeight] = React.useState(0); 

    const onLayout = (event) => { 
      const { width, height } = event.nativeEvent.layout; 
      setWidth(width); 
      setHeight(height); 
      console.log(width) 
    }; 

    React.useEffect(() => {

    }, [])

    const buildMenu = () => {
        let menu = []
    
        for (let i = 0; i < menuItems.length; i ++){
            let link
            
            if (menuItems[i] === 'home') {
                link = "/"
            }
            else(
                link = menuItems[i]
            )
            
            menu.push(
                <Link href={link} style={styles.menuItems}>{capitalizeFirstLetter(menuItems[i])}</Link>
            )
        }
    
        return menu
    }
  
    return (
      <View onLayout={onLayout} style={styles.container}>
        <ScrollView style={{flex:1, width:'100%', height:'100%', backgroundColor:''}}>
            <View style={styles.container2}>
                <View style={styles.innerContainer}>

                    <View style={styles.menu}>
                        
                        <View style={{backgroundColor:'', width:200, height:60}}>
                            <Image style={styles.image} source={require('../assets/RUSSO-DIGITAL.png')} />
                        </View>

                        {buildMenu()}

                    </View>

                    <View style={{flex:1, width: winWidth-200-130, height: winHeight-75-75, backgroundColor:''}}>
                        
                        <Slot />

                    </View>
                </View>
            </View>
        </ScrollView>
        
      </View>
    );
}

export default _layout

const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      backgroundColor: '#FF4B00', //orange
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
        flex:1,
        flexDirection:'column',
      width:'100%',
      minHeight:200,
        backgroundColor: '',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    innerContainer: {
        flexDirection:'row',
        backgroundColor:'', 
        marginLeft:130, 
        marginRight:120, 
        marginTop:75, 
        height:''
    },  
    menu: {
        // flex:1,
        backgroundColor:'',
        minWidth:150,
        // alignItems:'center',
        // height:'100%',
        // width: 300
    },
    menuItems: {
        marginLeft:10,
        color:'white',
        fontWeight:'bold',
        fontSize:14,
        marginBottom:3
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '',
        resizeMode:'contain'
      },
  });