import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeParams,
  getCharacterList,
  loadMoreCharacters } from '../../store/actions/charactersActions'
import { screensStyle } from '../../styles/screensStyle'
import Spinner from '../../components/ui/spinner'
import CharacterCard from '../../components/characters/characterCard'


const Characters = () => {
  const { characterList, pending, params } = useSelector(
    state => state.characters
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacterList(params))
  }, [params])

  const handleLoadMore = () => {
    let page = params.page + 1
    dispatch(changeParams({ page: page }))
    dispatch(loadMoreCharacters({ params }))
  }

}