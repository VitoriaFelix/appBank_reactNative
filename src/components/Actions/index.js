import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {AntDesign,Ionicons} from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
                <AntDesign name="addfolder" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
                <AntDesign name="tagso" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
                <AntDesign name="creditcard" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Carteira</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
                <AntDesign name="barcode" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Boletos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
                <AntDesign name="setting" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Conta</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
                <Ionicons name="bar-chart-outline" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>Investimento</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
                <Ionicons name="cash-outline" size={26} color="#000"/>
        </View>
        <Text style={styles.labelButton}>PIX</Text>
    </TouchableOpacity>

   </ScrollView>
 );
}


const styles = StyleSheet.create({
    container: {
        maxHeight:84,
        marginBottom:14,
        marginTop:18,
        paddingEnd:14,
        paddingStart:14,
   },
   actionButton:{
    alignItems:'center',
    marginRight:32
   },
   areaButton:{
    backgroundColor:'#ecf0f1',
    height:60,
    width:60,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
   },
   labelButton:{
    marginTop:4,
    fontWeight:'bold'
   }

})