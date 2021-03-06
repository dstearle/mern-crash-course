import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
    Button,
    Container
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import {v4 as uuidv4} from 'uuid';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions.js';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    // Hardcoded version of state, replaced by redux
    // state = {

    //     items: [

    //         {id: uuidv4(), name: 'Eggs'},
    //         {id: uuidv4(), name: 'Milk'},
    //         {id: uuidv4(), name: 'Steak'},
    //         {id: uuidv4(), name: 'Water'},

    //     ]

    // }

    // Lifecycle method
    componentDidMount() {

        this.props.getItems();
        
    }

    // Delete method
    onDeleteClick = (id) => {

        this.props.deleteItem(id);

    }

    // Render component
    render() {

        const{ items } = this.props.item;

        return(

            <Container>

                {/* <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={() =>{
                        const name = prompt('Enter Item');
                        if(name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuidv4(), name }]
                            }));
                        }
                    }}
                >
                    Add Item
                    
                </Button> */}

                <ListGroup>

                    <TransitionGroup className="shopping-list">

                            {items.map(({ _id, name }) => (

                                <CSSTransition key={_id} timeout={500} classNames="fade">

                                    <ListGroupItem>

                                        <Button
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >
                                            
                                            &times;
                                            
                                        </Button>

                                        {name}

                                    </ListGroupItem>

                                </CSSTransition>

                            ))}

                    </TransitionGroup>

                </ListGroup>

            </Container>

        );

    }

}

// Props
ShoppingList.propTypes = {

    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({

    item: state.item
    
});

export default connect(mapStateToProps, { getItems, deleteItem }) (ShoppingList);