// import {v4 as uuidv4} from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types.js';

const initialState = {

    // Replaced
    // items: [

    //     {id: uuidv4(), name: 'Eggs'},
    //     {id: uuidv4(), name: 'Milk'},
    //     {id: uuidv4(), name: 'Steak'},
    //     {id: uuidv4(), name: 'Water'},

    // ]

    items: [],

    loading: false

}

export default function(state = initialState, action) {

    switch(action.type) {

        // Getters
        case GET_ITEMS:

            return { 
                
                ...state,
                items: action.payload,
                loading: false
            
            };

        // Add Item
        case ADD_ITEM:

            return { 
                
                ...state,
                items: [action.payload, ...state.items]
            
            };

        // Loading state
        case ITEMS_LOADING:

            return { 
                
                ...state,
                loading: true
            
            };

        // Delete Item
        case DELETE_ITEM:

            return { 
                
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            
            };
        
        // Default state
        default: return state;

    }

}