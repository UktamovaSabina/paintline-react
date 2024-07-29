import React from 'react';
import './Products.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { shortenProductDescription } from '../../helpers/shortenText.js'

const Products = ({ heading, data }) => {
  const location = useLocation();

  return (
    <section className='products-table-section' style={location.pathname === '/' ? { backgroundColor: '#F6F6F6' }: {}}>
      <div className="container products-table-container">
        <h2>{heading}</h2>
        <div className='products-table__wrapper'>
          {
            data.map(d => {
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