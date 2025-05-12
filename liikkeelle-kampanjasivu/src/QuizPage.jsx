import Quiz from './components/Quiz.jsx';

export default function QuizPage() {
    return (
        <div className="QuizPage">
            <h1>Millainen panda olet?</h1>
            <p>Testaa lapsesi liikuntatottumuksia rennolla visalla ja vastaanota käytännön vinkkejä liikunnan lisäämiseen!</p>
            <Quiz />
        </div>
    )
}