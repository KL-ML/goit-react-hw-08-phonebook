import React, { useEffect, useMemo } from "react";

import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from "react-redux";
import { filterInputAction } from 'redux/contactsFilter/contacts.slice';
import { addContact, fetchContacts, deleteContact } from "redux/contactsFilter/contacts.thunk";
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading
} from "redux/contactsFilter/contacts.selectors";
import { Box } from "components/Box";

const { ContactForm } = require("components/ContactForm");
const { ContactList } = require("components/ContactList");
const { Filter } = require("components/Filter");

const ContactsPage = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const filter = useSelector(selectFilter);
    const contacts = useSelector(selectContacts);
    
    const changeFilter = e => {
        dispatch(
            filterInputAction(
                e.target.value,
            )
        );
    };
    
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const formSubmitHandler = ({ name, number }) => {
        const currentContact = { id: shortid.generate(), name: name, number: number }
        const contactDublicate = contacts.find(c => c.name === currentContact.name);
        if (contactDublicate) {
            Notify.failure(`${currentContact.name} is allready in contacts.`);
            return;
        }
        dispatch(addContact(currentContact));
    };
    
    const visibleContacts = useMemo(() => {
        return contacts.filter(n =>
            n.name.toLowerCase().includes(filter.toLowerCase()),
        );
    }, [contacts, filter]);
  
    const deleteCurrentContact = id => {
        dispatch(deleteContact(id));
    };

    return (
        <Box
        p={4}
        display="flex"
        flexDirection="column"
        width="containerWidth">
            <h1>Phonebook</h1>
            <ContactForm
                onSubmit={formSubmitHandler}
            />
            <h2>Contacts</h2>
            <Filter
                value={filter}
                onChange={changeFilter} />
            <ContactList
                contacts={visibleContacts}
                onDeleteContact={deleteCurrentContact}>
                {contacts.length === 0 && <p>Add your first contact!</p>}
                {isLoading && !error && <p>Loading...</p>}
                {contacts.length > 0 && !isLoading && !error && <p>Contacts list:</p>}
                {!isLoading && error && <p>Sorry, something goes wrong</p>}
            </ContactList>
        </Box>
    );
};

export default ContactsPage;