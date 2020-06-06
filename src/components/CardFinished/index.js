import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment'
import { getToDo, postToDo } from '~/store/ducks/todos/actions'
import { useSelector, useDispatch } from 'react-redux';
import styles from './style';
import api from '~/services/api'

const CardFinished = ({ data }) => {
    const [todos, setTodos] = useState([])


    const refresh = async () => {
        console.log('Removido com sucesso')
        const response = await api.get('/todos/status/1')
        setTodos(response)
    }




    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <View key={item.key} style={styles.container}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.date}> {moment(item.createdAt).format('LL')}</Text>
                        </View>
                    );
                })
            }
        </>
    )


}

export default CardFinished;