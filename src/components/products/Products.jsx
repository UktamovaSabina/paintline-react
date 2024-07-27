import React from 'react';
import './Products.scss';
import { products_data } from '../../db/database.js';
import { NavLink } from 'react-router-dom';
import { shortenProductDescription } from '../../helpers/shortenText.js'

const Products = () => {
  return (
    <section className='products-table-section'>
      <div className="container products-table-container">
        <h2>Наши Продукции:</h2>
        <div className='products-table__wrapper'>
          {
            products_data.map(d => {
              return <NavLink to={`/products/${d.id}`} key={d.id}>
                <h3>{d.ru_name + " | " + d.en_name}</h3>
                <p>{shortenProductDescription('', 80, d.descriptions[0])}</p>
              </NavLink>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Products