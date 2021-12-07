import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Thumb.styles'

const Thumb = ({ image, movieId, clickable }) => {
    return (
        <div>
            {
                clickable ? (
                    <Link to={`/${movieId}`} >
                        <Image src={image} alt="" />
                    </Link>
                ) : (
                    <Image src={image} alt="" />
                )
            }

        </div>
    )
}

export default Thumb
