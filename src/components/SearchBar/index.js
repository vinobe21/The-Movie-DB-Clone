import React, { useEffect, useRef, useState } from 'react'

import searchIcon from '../../images/search-icon.svg';

import { Content, Wrapper } from './SearchBar.styles'

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => { //when type in input set 500ms time delay
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer); //clear timer

    }, [setSearchTerm, state]);

    return (
        <div>
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt="" />
                    <input
                        type='text'
                        placeholder='Search Movie'
                        onChange={event => setState(event.currentTarget.value)}
                        value={state}
                    />
                </Content>
            </Wrapper>
        </div>
    )
}

export default SearchBar
