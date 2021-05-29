import React from 'react';
import { NavLink } from 'react-router-dom';



const Main = () => {
    return (
        <div className="MainPage">
            <div className="jumbotron-main">
                <h1 className="display-4" id="MainWork">Work</h1>
                <p></p>
                <p className="lead">Web-застосунок для пошуку робочих місць з ІТ спеціальностей.</p>
                <hr className="my-4" />
                <p>Для більш комфортного користування сайтом рекомендуємо авторизуватись.</p>
                <p className="lead">
                    <NavLink className="btn btn-dark btn-lg" to="/create" role="button">Авторизація</NavLink>
                </p>
            </div>
        </div>
    );
}

export default Main;