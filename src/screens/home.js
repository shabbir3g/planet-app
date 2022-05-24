import { StyleSheet, SafeAreaView, FlatList, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader />
            <FlatList
                contentContainerStyle={styles.list}
                data={PLANET_LIST}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => {
                    const { name, color } = item;
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

                }}
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
    }
})