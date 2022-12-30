import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    const [isBurgerClicked, setBurgerClicked] = useState(true);
    const [animationClass, setAnimationClass] = useState('');
    const handleMenuClick = () => {
        setBurgerClicked(!isBurgerClicked);
        let animation = isBurgerClicked ? 'burger-menu-start-animation' : 'burger-menu-second-animation';
        setAnimationClass(animation);
    }

    const hadleNavigateClick = (link) => {
        navigate(link);
        handleMenuClick();
    }
    return (
        <header className="App-header">
            <div>
            <div className={`burger-menu ${animationClass}`} onClick={handleMenuClick}>
            <div className={`${animationClass}`}></div>
            
        </div>
            <div className={`${isBurgerClicked ? 'popup-burger-menu-hidden' : "popup-burger-menu"}`}>
                <ul>
                    <li onClick={() => hadleNavigateClick('/')}>Главная</li>
                    <li onClick={() => hadleNavigateClick('/to-do')}>To do list</li>
                    <li>Анимация Frame Motion</li>
                    <li onClick={() => hadleNavigateClick('/css')}>Анимация CSS</li>
                </ul>
            </div>
            </div>
      </header>
    )
}

export default Header;