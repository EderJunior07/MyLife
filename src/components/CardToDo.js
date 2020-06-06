import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, RefreshControl, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment'
import api from '~/services/api'
import Carousel from 'react-native-snap-carousel';
import { RectButton } from 'react-native-gesture-handler';
import { getToDo, putToDo } from '~/store/ducks/todos/actions'
import { getToDoFinish } from '~/store/ducks/todosFinish/actions'
import { useSelector, useDispatch } from 'react-redux';
import CardFinished from './CardFinished';
const { width: WIDTH, height: HEIGTH } = Dimensions.get('window');




const CarouselFind = () => {
    const {
        todos: { loading, error, data: todos },
    } = useSelector((state) => state);

    const {
        todosfinish: { loadingF, errorF, data: todosfinish },
    } = useSelector((state) => state);



    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getToDo());
        dispatch(getToDoFinish());

        console.log(todosfinish)
    }, [])

    const [toggle, setToggle] = useState([])
    const [checked, setChecked] = useState(false)

    return (


        <>
            <Carousel
                layout={'default'}
                layoutCardOffset={`9`}
                inactiveSlideOpacity={true}
                data={todos}
                renderItem={({ item, index }) => {
                    const COLORS = (priority) => {
                        if (priority === 'Ultra High') {
                            return '#FF026C'
                        }
                        else if (priority === 'High') {
                            return '#FF8E3D'
                        }
                        else if (priority === 'Medium') {
                            return '#FFBD3D'
                        }
                        else {
                            return '#288A26'
                        }
                    }

                    const updateStatus = (id) => {

                        setTimeout(() => {
                            dispatch(putToDo({ id: id }));
                            setToggle(true)
                            dispatch(getToDoFinish());
                            setToggle(todosfinish)
                            setChecked(true)
                            setChecked(false)
                        }, 400);
                    }

                    return (
                        <View rippleColor={'white'} style={[styles.container, { backgroundColor: COLORS(item.priority) }]}>

                            <View style={styles.circle} />

                            <Text style={styles.title}>
                                {item.title}
                            </Text>


                            <Text style={styles.description}>
                                {moment(item.createdAt).format('LL')}
                            </Text>
                            <View style={{ position: 'absolute', borderRadius: 4, right: 15, top: 15, }}>
                                <CheckBox
                                    tintColors={{ true: '#fff', false: '#fff' }}
                                    disabled={false}
                                    value={checked}
                                    onValueChange={() => updateStatus(item._id)}
                                />
                            </View>
                        </View>
                    );
                }}
                sliderWidth={WIDTH}
                itemWidth={WIDTH - 60}
            />

            <Text style={[styles.titleSec, { marginTop: 25 }]}>Finished Tasks</Text>
            <CardFinished data={todosfinish} />



        </>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 90,
        borderRadius: 7,
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
    circle: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 30,
        alignSelf: 'flex-end',
        top: -230,
        right: 15,



    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        maxHeight: 40,
        color: "#fff",
        left: 30,
        bottom: 10
    },
    titleSec: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    description: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: "#fff",
        left: 30,
        bottom: 10
    }
})

export default CarouselFind