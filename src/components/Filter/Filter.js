import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts-actions';
import ProtoTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.filter__label}>
    Find contacts by name
    <input
      className={styles.filter__input}
      type="text"
      name="filter"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);
Filter.propTypes = {
  value: ProtoTypes.string,
  onChange: ProtoTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => ({ value: filter });
const mapDispatchtoProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchtoProps)(Filter);
