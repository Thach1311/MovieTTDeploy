import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [selectedMovieSlug, setSelectedMovieSlug] = useState('');
    const [selectedTheme, setSelectedTheme] = useState(false);
    return (
        <MovieContext.Provider value={{ selectedMovieSlug, setSelectedMovieSlug,selectedTheme, setSelectedTheme }}>{children}</MovieContext.Provider>
    );
};

export const useMovieContext = () => {
    return useContext(MovieContext);
};
