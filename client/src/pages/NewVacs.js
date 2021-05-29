import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-bootstrap";

const NewVacs = () => {
  return (
    <main className="newvacsbody">
      <div className="NewVacsCard">
        <div className="NewVacsCard_Category">
          <h2>Категорія</h2>
        </div>
        <p className="grtext">Позиція:</p>
        <div className="NewVacsCard_Main">
          <b>Full-stack Typescript developer</b>
        </div>
        <hr></hr>
        <p className="grtext">Необхідний рівень:</p>
        <b>Full-stack Typescript developer</b> <hr></hr>
        <NavLink to="/vacpage" className="NewVacsCard_Link">
            Дивитись повністю
        </NavLink>
      </div>
    </main>
  );
};

export default NewVacs;
