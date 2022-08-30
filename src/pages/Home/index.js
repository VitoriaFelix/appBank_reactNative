
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';
const list=[
    {
        id:1,
        label:'Boleto conta de Luz',
        value: '187,90',
        date: '14/09/2022',
        type:0
    },
    {
        id:2,
        label:'Pix Cliente X',
        value: '1.360,00',
        date: '25/09/2022',
        type:1
    },
    {
        id:3,
        label:'Sálario',
        value: '7.300,00',
        date: '30/09/2022',
        type:1
    }

]


export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Vitoria Felix"/>
        <Balance saldo="7.547,89"  gastos="-473,89"/>
        <Actions/>
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList style={styles.list}
        data={list}
        keyExtractor={(item) =>String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Moviments data={item} />}
 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
 },
 title:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:20,
    marginBottom:10,
    marginLeft:14,
    marginRight:14

 },
 list:{
    margin:14 
 }
});
