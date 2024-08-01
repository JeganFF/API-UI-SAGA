import { takeEvery, put,call } from 'redux-saga/effects'
import { ALL_PLACE, GET_PLACE,ALL_PLACE_DETAILS ,PLACE,} from './types';
import { ApiCall } from './api';
// import axios from 'axios';
// const API_URL = "https://api.zameensquare.com/api/search/auto-complete?page_no=0"

function* getPlace() {
    try {
        const response = yield call(ApiCall);
        yield put({ type: GET_PLACE, data: response.data.data.city });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
   
}
function* allPlace() {

    try {
        const response = yield call(ApiCall);
        console.log(response.data.data.locality)
        yield put({ type: ALL_PLACE_DETAILS, data: response.data.data.locality});
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}


function* productSaga() {
    yield takeEvery(PLACE, getPlace)
    yield takeEvery(ALL_PLACE, allPlace)
    

}

export default productSaga;