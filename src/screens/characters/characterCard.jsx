import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Colors from '../../theme/colors'
import { CHARACTERDETAILS } from '../../utils/routes'
import { useNavigation } from '@react-navigation/native'
import { ArrowRight } from 'iconsax-react-native'

const CharacterCard = ({item}) => {

  const navigation = useNavigation()
}

return (
  <Pressable onPress={()=>navigation.navigate(CHARACTERDETAILS,{characterID:item.id})} style={styles.container} >
    
    <Image source={{uri:item.image}} style={styles.image}/>
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{item.name}</Text>
      
      <Text style={styles.species}>{item.species}</Text>
      <View style={styles.statusContainer}>
        <View style={[styles.statusDot, {backgroundColor: item.status === 'Alive' ? Colors.GREEN : item.status === 'Dead' ? Colors.RED : Colors.BROWN}]}/>
        <Text style={styles.status}>{item.status}</Text>
      </View>
    </View>
    <View style={styles.iconContainer}>
      <GenderIcon gender={item.gender} size={24}/>
      <ArrowRight size={24} color={Colors.BLACK}/>
    </View>
    
  </Pressable>
)


export default CharacterCard
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginBottom: 4,
  },
  species: {
    fontSize: 14,
    color: Colors.BROWN,
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  status: {
    fontSize: 14,
    color: Colors.BLACK,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  }
})

