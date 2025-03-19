import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Searchmodal({display}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={display?"d-none d-lg-block":"d-block d-lg-none"}>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handleClose}/>
      </Button>

      <Modal show={show} onHide={handleClose} className=''>
        
         <FontAwesomeIcon icon={faX} className='position-fixed top-0 end-0'/>
              <Form.Control
                type="search"
                placeholder="type to search"
                autoFocus
              />
        
           
       
      
      
      </Modal>
    </div>
  );
}

export default Searchmodal;