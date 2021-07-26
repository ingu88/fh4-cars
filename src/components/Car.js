import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Car({
  rarity,
  img,
  year,
  name,
  unlock,
  price,
  speed,
  hdl,
  acc,
  launch,
  breaking,
  rClass,
  rating,
}) {
  return (
    <div className="car">
      <Link
        to={{
          pathname: `/car/${name}`,
          state: {
            rarity,
            img,
            year,
            name,
            unlock,
            price,
            speed,
            hdl,
            acc,
            launch,
            breaking,
            rClass,
            rating,
          },
        }}
      >
        <img src={img} alt={name} title={name} />
        <div className="car__data">
          <h3 className="car__name">{name}</h3>
          <h5 className="car__year">{year}</h5>
          <p className="car__price">{price}</p>
        </div>
      </Link>
    </div>
  );
}

Car.propTypes = {
  img: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unlock: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
  hdl: PropTypes.string.isRequired,
  acc: PropTypes.string.isRequired,
  launch: PropTypes.string.isRequired,
  breaking: PropTypes.string.isRequired,
  rClass: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};

export default Car;
