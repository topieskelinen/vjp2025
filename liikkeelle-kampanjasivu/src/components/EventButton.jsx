import { useNavigate } from 'react-router-dom';

export default function EventButton() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/event-page');
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (

        <div className="eventButton fade-in">
            <button className="eventButton" onClick= {handleClick}>
                <h2 className="buttonText">Liikuntakiertue</h2>
            </button>
        </div>
    )
}