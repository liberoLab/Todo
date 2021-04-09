import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Platform, // 운영체제 종류에 따라 스타일을 다르게 적용할 때 사용
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                할 일 목록
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}>
                <Ionicons name="ios-add" color="#FFFFFF" size={24} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 56,
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
    },
    title: {
        color: '#212121',
        fontSize: 32,
        fontWeight: '600',
    },
    button: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#212121',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Platform.select({ // 운영체제 종류에 따라 스타일을 다르게 적용할 때 사용
            ios: 2,
            android: 0
        }),
        paddingLeft: Platform.select({
            ios: 1,
            android: 0
        })
    }
})

export default Header