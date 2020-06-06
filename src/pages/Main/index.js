import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Easing, RefreshControl, Dimensions, TouchableOpacity, Image, CheckBox, Animated } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import styles from './style'
const { width: WIDTH, height: HEIGTH } = Dimensions.get('window');
import { useFocusEffect } from '@react-navigation/native';
import CarouselFind from '~/components/CardToDo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons'
import CardFinished from '~/components/CardFinished';


const Main = ({ navigation }) => {

  const [largura, setLargura] = useState(new Animated.Value(75))
  const [altura, setAltura] = useState(new Animated.Value(75))

  const Click = () => {

    Animated.timing(
      largura,
      {
        useNativeDriver: false,
        delay: 0,
        toValue: 65,
        easing: Easing.bounce,
        duration: 100,
      },
    ).start()
    Animated.timing(
      altura,
      {
        useNativeDriver: false,
        delay: 0,
        toValue: 65,
        easing: Easing.bounce,
        duration: 100,
      },
    ).start()

    setTimeout(function () {
      Animated.timing(
        largura,
        {
          useNativeDriver: false,
          delay: 0,
          toValue: 75,
          easing: Easing.bounce,
          duration: 200,
        },
      ).start()

      Animated.timing(
        altura,
        {
          useNativeDriver: false,
          delay: 0,
          toValue: 75,
          easing: Easing.bounce,
          duration: 300,
        },
      ).start()

    }, 200);

    setTimeout(function () {
      navigation.navigate('ToDoCreate')
    }, 400);


  }

  const handlerBouncy = () => {

    Animated.timing(
      largura,
      {
        useNativeDriver: false,
        delay: 0,
        toValue: 65,
        easing: Easing.bounce,
        duration: 100,
      },
    ).start()
    Animated.timing(
      altura,
      {
        useNativeDriver: false,
        delay: 0,
        toValue: 65,
        easing: Easing.bounce,
        duration: 100,
      },
    ).start()

    setTimeout(function () {
      Animated.timing(
        largura,
        {
          useNativeDriver: false,
          delay: 0,
          toValue: 75,
          easing: Easing.bounce,
          duration: 200,
        },
      ).start()

      Animated.timing(
        altura,
        {
          useNativeDriver: false,
          delay: 0,
          toValue: 75,
          easing: Easing.bounce,
          duration: 300,
        },
      ).start()

    }, 200);



  }


  useFocusEffect(
    React.useCallback(() => {

    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={{ height: '100%', backgroundColor: '#FFF' }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 90 }} scrollEnabled={true}>


          <Text style={styles.title}>Dashboard</Text>
          <Text style={styles.description}>{moment().format('LL')}</Text>
          <View style={styles.container}>
            <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', top: 16, left: 16, fontSize: 18 }}>Welcome, Eder</Text>
            <Text style={{ fontFamily: 'Poppins-Medium', color: '#FFF', top: 20, left: 16, fontSize: 14, maxWidth: 210 }}>You need more focus on your projects</Text>
            <Text style={{ fontFamily: 'Poppins-Bold', color: '#FFF', top: 60, left: 16, fontSize: 20, maxWidth: 210 }}>25/29</Text>
            <Image source={require('~/assets/images/coin.png')} style={{ position: 'absolute', width: 160, height: 160, alignSelf: 'flex-end', top: 20 }} />
          </View>


          <View style={{ top: 0, alignItems: 'center', padding: 30, paddingBottom: 5 }}>
            <Text style={styles.titleSec}>My Tasks</Text>
            <CarouselFind />

          </View>

        </ScrollView>

        <Animated.View style={[styles.btnCreate, { width: largura, height: altura }]}>
          <TouchableOpacity onLongPress={() => Click()} onPress={() => Click()} activeOpacity={1} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MaterialCommunityIcons name="edit" size={24} color="#fff" />
          </TouchableOpacity>
        </Animated.View>


      </View>
    </>
  )

};

export default Main;



//                          REFRESH CONTROL TO MY SCROLLVIEW

  // const [data, setData] = useState()
  // const [isRefresh, setIsRefresh] = useState(false)

  // const refresh = async () => {
  //   setIsRefresh(true)
  //   const response = await api.get('status/0')
  //   console.log('Retornou API')
  //   setData(response)
  //   setIsRefresh(false)
  // }


  // useEffect(() => {
  //refresh()
  // }, [])



// refreshControl={
//   <RefreshControl
//     progressBackgroundColor={'orange'}
//     tintColor={'#fff'}
//     colors={['#fff']}
//     refreshing={isRefresh}
//     onRefresh={refresh}
//   />
// }