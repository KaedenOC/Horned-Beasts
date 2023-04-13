import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
// import Beasts from '../beasts.json';

class SelectedBeast extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.chosenBeast}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={this.props.beastImg} alt={this.props.title} fluid/>
                    <p>{this.props.beastDescription}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        )
    }

}


export default SelectedBeast;