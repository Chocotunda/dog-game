import request from 'superagent'
import { mathRandom} from '../lib/reusable'
import { setImage } from './set'

export function fetchDogImage(exactBreed) {
    return function (dispatch) {
        request
            .get("https://dog.ceo/api/breed/" + exactBreed + "/images")
        .then(response => {
            const breed =
                response.body.message[
                mathRandom(response.body.message.length)
                ];
                dispatch(setImage(breed))
        })
        .catch(console.error);
    }
}