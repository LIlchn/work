import { useFetch } from "hooks/useFetch";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const VacPage = () => {
  let { id } = useParams();

  const [getVacancy, { data: vacancy, pending }] = useFetch();

  useEffect(() => {
    getVacancy("get", `vacancies/${id}`);
  }, [getVacancy]);

  if (pending == true) {
    return "loading";
  }

  if (vacancy == undefined) {
    return (
      <div className="Vac-page">
        <container>
          <p className="grtext">
            Not Found<b></b>
          </p>
        </container>
      </div>
    );
  }

  return (
    <div className="Resume-Page">
      <div className="wrapper">
        <div className="left">
          <div className="name-hero">
            <div className="me-img" />
            <div className="left-user">
              <h1>
                <p>{vacancy.name}</p>
              </h1>
              <p>Компанія</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="inner">
            <section>
              <h1>Опис посади</h1>
              <hr></hr>
              {/* <li>{user.cv.language}</li> */}

              <p>{vacancy.description}</p>
            </section>

            <section>
              <h1>Умови роботи</h1>
              <hr></hr>
              <p>{vacancy.conditions}</p>
            </section>

            <section>
              <h1>Необхідні знання</h1>
              <hr></hr>
              <ul className="skill-set">
                {/* <p>{user.cv.keyInfo}</p> */}
                <li>Mobile Development</li>
                <li>Xamarin</li>
                <li>CSS3</li>
                <li>Adobe Photoshop</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JQUERY</li>
                <li>UI Design</li>
                <li>Company Branding</li>
                <li>Responsive Web Design</li>
              </ul>
            </section>
            <section>
              <h1>Контакти</h1> <hr></hr>
              <p>{vacancy.contact}</p>
            </section>
          </div>
        </div>
      </div>
    </div>

    // <div className="Vac-page">
    //     <container>
    //         <p className="grtext"><b>Категорія:</b></p>
    //         <p><b>{vacancy.category}</b></p>
    //         <p className="grtext">Позиція:</p>
    //         <p>{vacancy.name}</p>
    //         <p className="grtext">Опис вакансії:</p>
    //         <ul>
    //             <li>{vacancy.description}</li>
    //         </ul>
    //         <p className="grtext">Умови роботи:</p>
    //         <ul>
    //             <li>{vacancy.conditions}</li>
    //         </ul>
    //         <p className="grtext">Контакти:</p>
    //         <p>{vacancy.contact}</p>
    //     </container>
    // </div>
  );
};

export default VacPage;
