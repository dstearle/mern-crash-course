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

}

export default connect()(ItemModal);