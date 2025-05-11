import { useNavigate } from 'react-router-dom';

export default function PandaQuizButton() {


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/panda-quiz');
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (

        <div className="pandaQuizButton fade-in">
            <button className="pandaQuizButton" onClick= {handleClick}>
                <h2 className="buttonText">Tee panda quiz! – Selvitä millainen panda olet</h2>
                <h4 className="buttonText">Testaa lapsesi liikuntatottumuksia rennolla visalla ja vastaanota käytännön vinkkejä liikunnan lisäämiseen!</h4>
            </button>
        </div>
    )
}