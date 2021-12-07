
import { useEffect, useState } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

const initialState = { //initial state page loads
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHoomFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);



    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(page, searchTerm);//fetch movies from API.js
            // console.log(movies);

            setState(prev => ({ //fetch previous movies 
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // Search and initial
    useEffect(() => {
        //sessionStorage
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                console.log(" Get from sessionStorge");
                setState(sessionState);
                return;
            }
        }
        console.log("Get from API");

        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    //Load more click event useEffect
    useEffect(() => {
        if (!isLoadingMore) return; //if not loading more

        fetchMovies(state.page + 1, searchTerm); // if loading more 
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    //write to sessionStorage
    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state));
    }, [searchTerm, state]);


    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}