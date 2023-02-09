import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../../pure/contact';

const ContactList = () => {
    const defaultContact = new Contact('Peter', 'Loeb', 'ploeb@test.com', false);

    return (
        <div>
            <h1>Ejercicio 1,2,3 - Contacts</h1>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>

    );
}

export default ContactList;
