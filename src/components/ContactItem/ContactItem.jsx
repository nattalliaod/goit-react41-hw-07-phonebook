import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDeleteContactMutation } from "redux/contacts/contactSlice";
import { Spinner } from "components/Loader/Loader";
import { ContactName, ContactNumber, ContactDelete } from "./ContactItem.styled"

export const ContactItem = ({ id, name, number }) => {
    const [deleteContact, { isLoading }] = useDeleteContactMutation();
    
    useEffect(() => {
        if (isLoading) toast(`Contact deleting...`)
    }, [isLoading]);
    
    return (
        <>
            <ContactName>{name}:</ContactName>
            <ContactNumber href={`tel:${number}`}>{number}</ContactNumber>
            <ContactDelete type='button' onClick={() => deleteContact(id)} disabled={isLoading}>
                {isLoading ? <Spinner width={10} height={10} /> : 'Delete'}</ContactDelete>
        </>
    );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};