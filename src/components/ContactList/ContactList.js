import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts-actions';
import ProtoTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
const ContactList = ({ contacts, onDelete }) => (
  <ol className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.item} key={id}>
        <ContactItem
          name={name}
          number={number}
          id={id}
          onDelete={() => onDelete(id)}
        />
      </li>
    ))}
  </ol>
);

ContactList.propTypes = {
  contacts: ProtoTypes.array.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ items, filter }) => {
  // console.log(items);
  return { contacts: getVisibleContacts(items, filter) };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
