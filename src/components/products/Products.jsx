import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { group__products__data as russian, group__products__data__english as english } from '../../db/database.js';
import ProductsGroup from '../groups/ProductsGroup.jsx';
import './Products.scss';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("lang") === "en") {
      setData(english.find(d => d.id === +id))
      return;
    } else {
      setData(russian.find(d => d.id === +id))
    }
  }, [id, localStorage.getItem("lang")])

  return (
    <>
      <section className='products-section'>
        <div className="container">
          {
            data ? <React.Fragment key={data.id}>
              <h2>{data.title}</h2>
              <p className='desc'>{data.desc}</p>
              <ul className='sub-pr'>
                {
                  data.sub_products.map((s, ind) => {
                    return <li key={ind}>
                      <h3>{s.title}</h3>
                      <ul>
                        {
                          s.desc.map((d, i) => {
                            return <li key={i}><p>{d}</p></li>
                          })
                        }
                      </ul>
                    </li>
                  })
                }
              </ul></React.Fragment> : <></>
          }
        </div>
      </section>
      <ProductsGroup heading={t("group-products.title2")} id={id} />
    </>
  )
}

export default Products