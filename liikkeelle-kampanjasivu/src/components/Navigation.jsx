import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState); 
    };

    const handleNavigation = (path) => {
        navigate(path); 
        setIsDropdownOpen(false); 

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    };

    const liikkelleClick = () => {
        navigate('/')

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <nav className="navigation">
            <div className="navCont">
                <div onClick={liikkelleClick} className="navLeft">
                    <img className="pandaNavPic" src='/images/pandaDab.png' alt='pandadab' />  
                    <h4 className="navTitle">Liikkeelle!</h4> 
                </div>
                <div className="navRight">
                    <button className="menuButton" onClick={toggleDropdown}>
                        Valikko
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdownMenu">
                            <button onClick={() => handleNavigation('/')}>Etusivu</button>
                            <button onClick={() => handleNavigation('/tapahtuma')}>Liikuntakiertue</button>
                            <button onClick={() => handleNavigation('/panda-quiz')}>Panda-visa</button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}