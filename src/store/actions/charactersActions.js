import { 
    CHARACTERS_REJECT,
    FETCH_CHARACTERS,
    PENDING_CHARACTERS,
    FETCH_SINGLECHARACTER,
    PENDING_SINGLECHARACTER,
    SINGLECHARACTER_REJECT,
    RESET_DATA, 
    CHANGE_PARAMS,
    LOAD_MORE_DATA
} from "../types/characterTypes";

import { CHARACTERS_URL } from '../../service/url';
import { getRequest } from '../../service/verbs';

export const getCharacterList = (params)=> {
  return async (dispatch)=> {
    dispatch({type: PENDING_CHARACTERS})
    try {
      const response = await getRequest(CHARACTERS_URL, params)
      dispatch({type: FETCH_CHARACTERS, payload: response.data.results})
    }
    catch (error) {
      dispatch({type: CHARACTERS_REJECT, payload: error})
    }
  }
}

export const loadMoreCharacters = (params)=> {
  return async (dispatch)=> {
    try {
      const response = await getRequest(CHARACTERS_URL, params)
      dispatch({type: LOAD_MORE_DATA, payload: response.data.results})
    }
    catch (error) {
      dispatch({type: CHARACTERS_REJECT, payload: error})
    }
  }
}

export const getSingleCharacter = (params)=> {
  return async (dispatch)=> {
    dispatch({type: PENDING_SINGLECHARACTER})
    try {
      const response = await getRequest(CHARACTERS_URL, params)
      dispatch({type: FETCH_SINGLECHARACTER, payload: response.data.results})
    }
    catch (error) {
      dispatch({type: SINGLECHARACTER_REJECT, payload: error})
    }
  }
}

export const resetData = ()=> {
  return async (dispatch)=> {
    dispatch({type: RESET_DATA})
  }
}

export const changeParams = (params)=> {
  return async (dispatch)=> {
    dispatch({type: CHANGE_PARAMS, payload: params})
  }
}