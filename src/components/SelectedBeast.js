import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Beasts from '../beasts.json';

class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Beast</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.src} alt={this.props.title} />
                    <p>{this.props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        )
    }

}


export default SelectedBeast;