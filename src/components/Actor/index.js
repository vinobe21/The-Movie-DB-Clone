import React from 'react'
import { Image, Wrapper } from './Actor.styles'

import PropTypes from 'prop-types'; //use to prop validation

const Actor = ({ name, character, imageUrl }) => (
    <Wrapper>
        <Image src={imageUrl} alt="" />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

//Check props validation
Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
}
export default Actor
