import {combineReducers} from 'redux'
import { place_data } from "./placereducer"
import {all_place_data} from './allplacereducer'
export default combineReducers({
    place_data,
    all_place_data
})