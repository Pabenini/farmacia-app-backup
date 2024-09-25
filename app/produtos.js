import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { API_URL } from './config';
import { useEffect, useState } from "react";
import axios from 'axios'; //import axios
import React from "react";
import list from "./products.json";

export default function listProduct() {
    const  [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(API_URL + '/products')
            .then(response => {
                setProducts(response.data.list);
            })
            .catch(error => console.error('Erro ao carregar Produtos', error));
    }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {products.map(item => (
                <View key={item.id}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{item.product}</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'justify' }}>{item.description}</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20, width: '80%', alignSelf: 'center' }} />
                </View>
         ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        display:  'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    }
});