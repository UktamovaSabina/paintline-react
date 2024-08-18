import React, { useEffect, useState } from 'react';
import './ProductsGroup.scss';
import { group__products__data as russian, group__products__data__english as english } from '../../db/database.js';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/Images/arrow-right.svg';

const ProductsGroup = ({ heading, id }) => {
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("lang") === "en") {
      setDatabase(english)
      return;
    } else {
      setDatabase(russian)
    }
  }, [localStorage.getItem("lang")])

  return (
    <section>
      <div className="container group-products-container">
        <h2>{heading}:</h2>
        <div className='group-products__wrapper'>
          {
            database && database.map(d => {
              if (+d.id !== +id) {
                return <NavLink to={`/groups/${d.id}`} key={d.id}>
                  <h3>{d.title}</h3>
                  <img src={arrow} alt="arrow right" className='arrow-right' />
                </NavLink>
              }
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ProductsGroup