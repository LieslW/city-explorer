import React from 'react';
import { Modal } from 'react-bootstrap';

class ErrorModal extends React.Component {
    render() {
        return(
            <>
            <Modal
                show={this.props.showModal}
                onClick={this.props.hideModal}
            >
            <Modal.Header closeButton>{this.props.error}</Modal.Header>
            <Modal.Body onClick={this.props.hideModal}>
                <p>{this.props.error} {this.props.errorMessage}</p>
            </Modal.Body>
            </Modal>
            </>
        )
    }
}

export default ErrorModal;
