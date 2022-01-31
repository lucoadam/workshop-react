import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function DeleteModal(props) {
  
    return (
      <>  
        <Modal show={props.show} onHide={()=>props.changeDelete(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Dialog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p>
                  Are you sure you want to delete user with name following details?
                  </p>
                <p className='m-0'><span>Name: </span>{props.deletingItem.name}</p>
                <p className='m-0'><span>Age: </span>{props.deletingItem.age}</p>
                <p className='m-0'><span>Location: </span>{props.deletingItem.location ?? '-'}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>props.deleteItem()}>
              Yes
            </Button>
            <Button variant="secondary" onClick={()=>props.changeDelete(false)}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
