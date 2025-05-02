import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();

    return (
        <nav className="navigation">
            <div className="navCont">
                <div onClick={() => navigate('/')} className="navLeft">
                    <img className="pandaNavPic" src='/images/pandaDab.png' alt='pandadab' />  
                    <h4 className="navTitle">Liikkeelle!</h4> 
                </div>
                <div className="navRight">
                    <button onClick={() => navigate('/event-page')}>Liikuntakiertue</button>
                    <button>Panda-visa</button>
                </div>
            </div>
        </nav>
    );
}