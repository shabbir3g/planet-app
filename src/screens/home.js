import { StyleSheet, SafeAreaView, FlatList, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useNavigation } from '@react-navigation/native';

const PlanetItem = ({ item }) => {
    const { name, color } = item;
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => {
            navigation.navigate('Details', { planet: item })
        }} style={styles.item}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[styles.circle, { backgroundColor: color }]}></View>
                <Text preset="h4" style={styles.itemName}>{name}</Text>
            </View>
            <AntDesign name="right" size={18} color="white" />
        </Pressable>
    );
}

export default function Home({ navigation }) {
    const [list, setList] = useState(PLANET_LIST);

    const renderItem = ({ item }) => {
        return (
            <PlanetItem item={item}></PlanetItem>
        );
    };

    const searchFilter = (text) => {
        const filteredList = PLANET_LIST.filter(item => {
            const itemName = item.name.toLowerCase();
            const userTypedText = text.toLowerCase();
            return itemName.indexOf(userTypedText) > -1
        });

        setList(filteredList)
    }


    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <TextInput 
            placeholder='Type the planet name'
            placeholderTextColor={colors.white}
            style={styles.searchInput}
            onChangeText={(text) => searchFilter(text)}
             />
            <FlatList
                contentContainerStyle={styles.list}
                data={list}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    item: {
        flexDirection: "row",
        alignItems: 'center',
        padding: spacing[4],
        justifyContent: 'space-between'
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4]
    },
    list: {
        padding: spacing[4]
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    separator: {
        borderWidth: 0.5,
        borderBottomColor: colors.white,
    },
    searchInput: {
        padding: spacing[4],
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        margin: spacing[5]
    }
})