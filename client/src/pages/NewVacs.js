import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-bootstrap";
import { useFetch } from "hooks/useFetch";
import { Link } from "react-router-dom";
import Search from "components/Search";

const NewVacs = () => {
  const [getVacanciesRequest, { data: vacancies }] = useFetch();

  const [sortedVacancies, setSortedVacancies] = useState(vacancies);

  useEffect(() => {
    getVacanciesRequest("get", "vacancies");
  }, [getVacanciesRequest]);

  useEffect(() => {
    if (vacancies == null) return;

    setSortedVacancies(vacancies);
  }, [vacancies]);

  if (sortedVacancies == null) return null;

  return (
    <main className="newvacsbody">
      <Search
        searchData={vacancies}
        searchKeys={["name", "category"]}
        onResult={(res) => setSortedVacancies(res)}
      />
      {sortedVacancies?.map((vacancy) => (
        <div className="NewVacsCard" key={vacancy._id}>
          <div className="NewVacsCard_Category">
            <h2>Категорія</h2>
          </div>
          <p className="grtext">Позиція:</p>
          <div className="NewVacsCard_Main">
            <b>{vacancy.name}</b>
          </div>
          <hr></hr>
          <p className="grtext">Необхідний рівень:</p>
          <b>{vacancy.level}</b> <hr></hr>
          <Link to={`vacancy/${vacancy._id}`} className="NewVacsCard_Link">
            Дивитись повністю
          </Link>
        </div>
      ))}
    </main>
  );
};

export default NewVacs;
