import { PLACE, ALL_PLACE} from "./types"

export const place = (data) => {
        return {
        type: PLACE,
        data
    }
}


export const get_all_place = (data) => {
    return {
    type:  ALL_PLACE,
    data
}
}