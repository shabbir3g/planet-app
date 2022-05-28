import { SafeAreaView,StyleSheet, ScrollView, View, Pressable, Linking } from 'react-native'
import React from 'react'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing';
import {MercurySvg, EarthSvg, JupiterSvg, MarsSvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg} from "../svg";
import Text from '../components/text/text';

const PlanetSection = ({title, value}) => {
    return(
        <View style={styles.plateSection}>
            <Text preset='small' style={{textTransform: 'uppercase'}}>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}


export default function Details({ nagivation, route }) {
    const planet = route.params.planet;
    const {name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink} = planet;


    const renderImage = () => {
        switch(name){
            case 'mercury':
                return <MercurySvg />;
            case 'earth':
                return <EarthSvg />;
            case 'jupiter': 
                return <JupiterSvg />;
            case 'mars':
                return <MercurySvg />
            case 'neptune':
                return <NeptuneSvg />
            case 'saturn': 
                return <SaturnSvg />
            case 'uranus':
                return <UranusSvg />
            case 'venus':
                return <VenusSvg />
        }
    }
    const onPressLink = () => {
        Linking.openURL(wikiLink);
    }
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader title={planet.name} backBtn={true} />
            <ScrollView>
                <View style={styles.imageView}> 
                {renderImage()}
                </View>
                <View style={styles.detailsView}> 
                    <Text preset='h1' style={styles.name} >{name}</Text>
                    <Text style={styles.description}  >{description}</Text>
                    <Pressable onPress={onPressLink} style={styles.source}> 
                        <Text>Source: </Text>
                        <Text preset='h4' style={styles.wikipedia}>Wikipedia</Text>
                    </Pressable>
                </View>
                <View style={{height: 40}} />
                <PlanetSection title="ROTATION TIME" value={rotationTime}/>
                <PlanetSection title="REVOULATION TIME" value={revolutionTime}/>
                <PlanetSection title="REDIUS" value={ radius}/>
                <PlanetSection title="AVERAGE TEMP" value={avgTemp}/>
               
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1
    },
    imageView: {
        padding: spacing[8],
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing[8],
    },
    detailsView: {
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        textAlign: 'center'
    },
    name: {
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    description: {
        marginTop: spacing[8],
        textAlign: 'center',
        lineHeight:21
    },
    source: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: spacing[3],
    },
    wikipedia:{
        textDecorationLine: 'underline',
    },
    plateSection: 
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderWidth: 1,
        borderColor: colors.grey,
        marginHorizontal: spacing[6],
        marginBottom: spacing[4],
    } 

})