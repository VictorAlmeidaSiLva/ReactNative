import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import Title from '../components/Title'
import { NewsContext } from '../context/NewsContext'
import News from '../components/News'

export default function NewsScreen() {

    const { newsList, listNews } = React.useContext(NewsContext)
    const navigation = useNavigation();

    useEffect(() => {
        listNews();
    }, []);

    return (
        <View>
            <View>
                <Title text='News' />
            </View>
            <View>
                {newsList.map(news => (<News news={news} onPress={() => {
                    navigation.navigate("NewsDetail", {
                        newsId: news.id
                    })
                }} />))}
            </View>
        </View>
    )
}