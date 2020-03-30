import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button,
    Container
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {

    state = {

        items: [

            {id: uuid(), name: 'Eggs'},
            {id: uuid(), name: 'Milk'},
            {id: uuid(), name: 'Steak'},
            {id: uuid(), name: 'Water'},

        ]

    }

}

export default ShoppingList;