import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Team.css'

const Team = () => {
    const [member, setMember] = useState([])
    // console.log(member);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setMember(data))
    }, [])
    const handleAddToCart = (member) => {
        const newCart = [...cart, member];
        setCart(newCart)
    }
    return (
        <div className='team-container'>
            <div className='team-member'>
                <h2>Our Team Member</h2>
                <div className='team-member-info'>
                    {
                        member.map(member => <Member
                            key={member.name}
                            member={member}
                            handleAddToCart={handleAddToCart}
                        >

                        </Member>)
                    }
                </div>

            </div>
            <div className='team-cart'>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Team;