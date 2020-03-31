import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button,
    Container
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv1 from 'uuid/v1';

class ShoppingList extends Component {

    state = {

        items: [

            {id: uuidv1, name: 'Eggs'},
            {id: uuidv1, name: 'Milk'},
            {id: uuidv1, name: 'Steak'},
            {id: uuidv1, name: 'Water'},

        ]

    }

    render() {

        const{ items } = this.state;

        return(

            <Container>

                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() =>{
                        const name = prompt('Enter Item');
                        if(name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuidv1, name }]
                            }));
                        }
                    }}
                >Add Item</Button>

            </Container>

        );

    }

}

export default ShoppingList;