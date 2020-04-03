import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions.js';
import { compose } from 'redux';

class ItemModal extends Component {

    // Component State
    state = {

        modal: false,
        name: ''

    }

    // Toggle Modal
    toggle = () => {

        this.setState({

            modal: !this.state.modal

        });

    }

    // Render Component
    render() {

        return(

            <div>

                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                    Add Item
                    
                </Button>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >

                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>

                    <ModalBody>
                        
                    </ModalBody>

                </Modal>

            </div>

        );

    }

}

export default connect()(ItemModal);