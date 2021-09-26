import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Member.css'
import Rating from 'react-rating';

const Member = (props) => {
    const { name, age, profession, country, salary, img } = props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='member-section'>
            <div className='member-container'>
                <div className='image'>
                    <img src={img} alt="" />
                </div>
                <div className='member-info'>
                    <h3>{name}</h3>
                    <p>Age: {age}</p>
                    <p>Profession: {profession}</p>
                    <p>Country: {country}</p>
                    <p>Salary: ${salary}</p>
                    <button onClick={() => props.handleAddToCart(props.member)} className='add-btn'>{element}Add To Cart</button>
                    <br />
                    <Rating
                        stop={2}
                        emptySymbol={['fab fa-facebook-square icon-color', 'fab fa-linkedin icon-color']}
                        readonly
                    >

                    </Rating>
                </div>
            </div>
        </div>
    );
};

export default Member;