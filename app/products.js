import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import React from "react";
import list from "./products.json"

export default function products() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {list.listProduct.map((item) => (
                <View key={item.id} style={styles.container}>
                    <Text>{item.product}</Text>
                    <Text>{item.price}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
    }
});
