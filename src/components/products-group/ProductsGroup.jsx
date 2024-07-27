import React from 'react';
import './ProductsGroup.scss';
import { group__products__data } from '../../db/database.js';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/Images/arrow-right.svg'

const ProductsGroup = () => {
  return (
    <section>
      <div className="container group-products-container">
        <h2>Группы Продуктов:</h2>
        <div className='group-products__wrapper'>
          {
            group__products__data.map(d => {
              return <NavLink to={`/group/${d.id}`} key={d.id}>
                <h3>{d.title}</h3>
                <img src={arrow} alt="arrow right" className='arrow-right' />
              </NavLink>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ProductsGroup