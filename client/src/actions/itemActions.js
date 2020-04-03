import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types.js';

// Getter
export const getItems = () => {

    return{

        type: GET_ITEMS

    };

};

// Add Item
export const addItem = (item) => {

    return{

        type: ADD_ITEM,
        payload: item

    };

};

// Delete Item
export const deleteItem = (id) => {

    return{

        type: DELETE_ITEM,
        payload: id

    };

};