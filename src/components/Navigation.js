import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className="id">
                <div className="idContent">
                    <img src="./media/jeanAbel.jpg" alt='my face' />
                    <h3>Jean Abel</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li> 
                        <NavLink to='/' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <i className='fas fa-home'></i>
                            <span>Accueil</span> 
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink to='/contact' className={(nav) => (nav.isActive ? "nav-active" : "")}> 
                            <i className='fas fa-address-book'></i>
                            <span>Contact</span> 
                        </NavLink> 
                    </li>
                    <li> 
                        <NavLink to='/portfolio' className={(nav) => (nav.isActive ? "nav-active" : "")}> 
                            <i className='fas fa-images'></i>
                            <span>Portfolio</span> 
                        </NavLink> 
                    </li>
                    <li> 
                        <NavLink to='/competence' className={(nav) => (nav.isActive ? "nav-active" : "")}> 
                            <i className='fas fa-mountain'></i>
                            <span>Compétence</span> 
                        </NavLink> 
                    </li>
                </ul>
            </div>
            
            <div className="social-network">
                <ul>
                    <li>
                        <a href="https://www.google.com" target='_blank' rel='noopener noreferrer'><i className='fab fa-google'></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="https://www.github.com" target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook'></i></a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Copyright - 2020</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;