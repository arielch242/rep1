import http from '../services/httpService';
import {apiUrl} from '../config.json';

export function getCard(cardId){
    return http.get(`${apiUrl}/cards`,cardId);
}

export function setCard(card){
    const {_id:cardId, ...bodycard} = card;
    return http.put(`${apiUrl}/cards/${cardId}`,bodycard);
}

export function deleteCard(cardId){
    return http.delete(`${apiUrl}/cards/${cardId}`)
}

export function createCard(card){
    return http.post(`${apiUrl}/cards`,card);
}

export function getMyCards(){
    return http.get(`${apiUrl}/cards`);
}

export default {createCard,
                getMyCards,
                getCard,
                setCard,
                deleteCard
                               
 } ;