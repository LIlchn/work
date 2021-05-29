import { useFetch } from "hooks/useFetch";
import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';

import * as ScHomePage from "./styled";

const HomePage = () => {
  const [getProfileVacanciesAll, { data: vacancies }] = useFetch();

  useEffect(() => {
    getProfileVacanciesAll("get", "vacancies");
  }, [getProfileVacanciesAll]);

  return (
    <ScHomePage.Block>

      <div className="MainPage">
        <div className="jumbotron-main" style={{ maxHeight: '19rem', marginTop: '5vh', maxWidth: '100vh' }}>
          <h1 className="display-4" id="MainWork">Work</h1> <hr></hr>
          <p></p>
          <p className="lead">Web-застосунок для пошуку робочих місць з ІТ спеціальностей.</p>
          <hr className="my-4" />
          <p>Для більш комфортного користування сайтом рекомендуємо авторизуватись.</p>
          <p className="lead"> <hr></hr>
            <NavLink className="btn btn-dark btn-lg" to="/login" role="button">Авторизація</NavLink>
          </p>
        </div>
      </div>


      <ScHomePage.List>
        {vacancies?.length === 0 && "Empty, create smthng"}
        {vacancies?.map((vacancy, index) => {
          //return <div key={index}>{vacancy.name}</div>;
        })}
      </ScHomePage.List>
    </ScHomePage.Block>
  );
};

export default HomePage;
