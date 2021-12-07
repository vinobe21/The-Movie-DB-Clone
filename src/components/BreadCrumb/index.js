import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Content, Wrapper } from './BreadCrumb.styles'

const BreadCrumb = ({ movieTitle }) => {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span> | </span>
                <span>{movieTitle}</span>
            </Content>
        </Wrapper>
    )
}

BreadCrumb.propTypes = { //note this propTypes p is a small letter
    movieTitle: PropTypes.string  //note this PropTypes P is a capital letter
}
export default BreadCrumb
