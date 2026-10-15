import { StyleSheet, Text, View,
ActivityIndicator } from 'react-native'
import Colors from '../../theme/colors'


const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large'
      color={Colors.BLACK} />
      <Text>Yükleniyor...</Text>
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})