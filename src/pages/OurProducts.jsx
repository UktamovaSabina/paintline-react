import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products_data } from '../db/database.js';
import Products from '../components/products/Products';
import SingleData from '../components/products/SingleData';

const OurProducts = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState(null);

  useEffect(() => {
    setSingleData(products_data.find(d => d.id === +id));
  }, [id])

  return (
    <>
      {
        !id ? <Products heading={'Наши Продукции:'} data={products_data} /> :
          <>
            <SingleData singleData={singleData} />
            <Products heading={'Так же рекомендуемые продукты:'} data={products_data.filter(d => d.id !== +id)} />
          </>
      }
    </>
  )
}

export default OurProducts