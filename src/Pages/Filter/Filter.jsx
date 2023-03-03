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
      <div className="filter-container">
        <input
          type="text"
          name="filter"
          className="filter__input"
          placeholder='Filter by name'
          onChange={handleChangeFilter}
        />
      </div>
    </>
  );
};
