import {v4 as uuidv4} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types.js';

const initialState = {

    items: [

        {id: uuidv4(), name: 'Eggs'},
        {id: uuidv4(), name: 'Milk'},
        {id: uuidv4(), name: 'Steak'},
        {id: uuidv4(), name: 'Water'},

    ]

}

export default function(state = initialState, action) {

    switch(action.type) {

        // Getters
        case GET_ITEMS:

            return { ...state };

        // Delete
        case DELETE_ITEM:

            return { 
                
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            
            };
        
        // Default state
        default: return state;

    }

}