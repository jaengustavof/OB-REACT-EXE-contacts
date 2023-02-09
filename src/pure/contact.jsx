import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ContactComponent = ({ contact }) => {
    
    const [status, setStatus] = useState(contact.online);
    
    const changeStatus = () => {
        setStatus(!status);
    }
    
    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h2>
                LastName: { contact.lastName}
            </h2>
            <h3>
                email: { contact.email }
            </h3>
            <h4>
                status: { status === true ? 'ONLINE': 'OFFLINE'}
            </h4>
            <button onClick={changeStatus}>{status?'Disconnect':'Connect'}</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
