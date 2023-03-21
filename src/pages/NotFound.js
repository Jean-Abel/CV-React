import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <div className='not-found'>
            <Navigation />
            <div className="not-found-content">
                <h3>Désolé cette page n'existe pas !</h3>
                <NavLink to='/'>
                    <i className='fas fa-home'></i>
                    <span>Accueil</span>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;