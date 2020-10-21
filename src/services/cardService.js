import http from '../services/httpService';
import {apiUrl} from '../config.json';

export function createCard(card){
    return http.post(`${apiUrl}/cards`,card);
}

export function getMyCards(){
    return http.get(`${apiUrl}/cards`);
}

export default {createCard,
                getMyCards               
 } ;