import PropTypes from 'prop-types';
import './Filter.css';
//? redux
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const FilterBar = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <h3>Find your contacts by name</h3>
      <div className="filter-container">
        <input
          type="text"
          name="filter"
          className="filter__input"
          onChange={handleChangeFilter}
        />
      </div>
    </>
  );
};

FilterBar.propTypes = {
  handleChange: PropTypes.func,
};
