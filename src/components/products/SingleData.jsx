import React from 'react';
import './SingleData.scss';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from 'react-router-dom';

const SingleData = ({ singleData }) => {
    if (singleData) {
        var { ru_name, en_name, img, descriptions, made_in } = singleData;
        console.log(descriptions);
        console.log(made_in);
    }
    return (
        singleData ? <section className='single-product__section'>
            <div className="container">
                <h2>{ru_name} | {en_name}</h2>
                <div className='single-data__info'>
                    <img src={`/${img[0]}`} alt={`${ru_name}, ${en_name}`} width={488} height={492} />
                    <div className='single-data__details'>
                        <h3>{ru_name} | {en_name}</h3>
                        {
                            descriptions.map((d, i) => {
                                return <p key={i}>{d}</p>
                            })
                        }
                        <p>Made in: <strong>{made_in}</strong></p>
                        <p className='pls-contact'>Если вам нужна дополнительная информация, свяжитесь с нами. < MdOutlinePhoneInTalk /></p>
                        <Link to={'/contact'}>связаться с нами < MdOutlinePhoneInTalk /></Link>
                    </div>
                </div>
            </div>
        </section> : <></>
    )
}

export default SingleData