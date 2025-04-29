export default function Navigation() {
    return (
        <nav className="navigation">
            <div className="navCont">
                <div className="navLeft">
                    <img className="pandaNavPic" src='/images/pandaDab.png' alt='pandadab' />  
                    <h4 className="navTitle">Liikkeelle!</h4> 
                </div>
                <div className="navRight">
                    <button>Meistä</button>
                    <button>Liikuntakiertue</button>
                    <button>Panda-visa</button>
                </div>
                
            </div>
        </nav>
    );
}