import { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery } from 'redux/contacts/contactSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Container } from '../Container/Container';
import { MainText, Text } from './App.styled';

export const App = () => {
  const { data } = useFetchContactsQuery();

  return (
    <>
      <Container>
        <MainText>Phonebook</MainText>
        <ContactForm />
      </Container>

      <Container>
        <Text>Contacts</Text>
        {data && data.length > 1 && <Filter />}
        <ContactList />
      </Container>
      <Toaster position="top-right" />
    </>
  );
};
