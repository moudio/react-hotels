import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';
//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    rooms,
  } = context;
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* Endo of select type */}
      </form>
    </section>
  );
}

export default RoomFilter;