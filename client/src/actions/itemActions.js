import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types.js';

// Getter
export const getItems = () => {

    return{

        type: GET_ITEMS

    };

};

// Delete
export const deleteItem = (id) => {

    return{

        type: DELETE_ITEM,
        payload: id

    };

};