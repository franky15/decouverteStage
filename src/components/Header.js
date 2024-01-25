import React, {useState} from 'react';
import { Link } from "react-router-dom"

const Header = () => {

    const [ isopen, setIsopen ] = useState(false);

    

    return (
        <div className='containerHeader'>
        <div className='Header'>
            
            <ul className='HeaderUl'>
               
                <li className='HeaderUl__logo'> 
                    <Link to="/">Acceuil</Link>
                </li>
                <li className='HeaderUl__menu' onClick={()=>setIsopen(true) }>
                    <i class="fa-solid fa-bars menuIcon"></i>
                </li>

              
            </ul>
            
            
        </div>
        
        {
            isopen &&
        <div className='containerNav'>

            <ul className='nav'>
                
                <li className='nav__portfolio'> 
                    <Link to="/portfolio" onClick={()=>setIsopen(false)} > Mon portfolio </Link>
                </li>
                <li className='nav__conclusion'>
                    <Link to="/conclusion" onClick={()=>setIsopen(false)} >Conclusion</Link>
                </li>
            </ul>

        </div>
        
        }
       
        </div>
    );
};

export default Header;