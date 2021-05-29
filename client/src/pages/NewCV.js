import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-bootstrap";

const NewCV = () => {
  return (
    <main className="newvacsbody">
      <div className="NewVacsCard">
        <div className="NewVacsCard_Category">
          <h2>Typescript developer</h2>
        </div>
        <p className="grtext">Повне ім'я:</p>
        <div className="NewVacsCard_Main">
          <b>Some Name</b>
        </div>
        <hr></hr>
        <p className="grtext">Рівень розробника:</p>
        <b>Middle</b> <hr></hr>
        <NavLink to="/vacpage" className="NewVacsCard_Link">
            Дивитись повністю
        </NavLink>
      </div>
    </main>
  );
};

export default NewCV;
