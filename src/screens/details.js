import { SafeAreaView, Text, StyleSheet } from 'react-native'
import React from 'react'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'

export default function Details({ nagivation }) {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader title="Details" backBtn={true} />
            <Text style={{ color: colors.white }}>Detils</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },

})