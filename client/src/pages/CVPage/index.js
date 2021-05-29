import { AuthContext } from "context/AuthContext";
import { useFetch } from "hooks/useFetch";
import React, { useEffect, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as ScCVPage from "./styled";

const CVPage = () => {
  let { id } = useParams();

  const [getUser, { data: user, pending }] = useFetch();

  useEffect(() => {
    getUser("get", `auth/${id}`);
  }, [getUser, id]);

  if (pending === true) {
    return "loading";
  }

  if (user == undefined) {
    return (
      <div className="Resume-Page">
        <div>
          <p className="grtext">
            User does not exist<b></b>
          </p>
        </div>
      </div>
    );
  }

  console.log("user", user);

  const cv = user.cv;

  const userSkills = cv.keyInfo.split(" ");

  return (
    <ScCVPage.ScCVPage>
      <div className="Resume-Page">
        <div className="wrapper">
          <div className="left">
            <div className="name-hero">
              <img
                className="me-img"
                src={`https://i.pravatar.cc/300?img=${user._id}`}
                alt=""
              />

              <div className="left-user">
                <h1>{user.name}</h1>
                {/* <p><b>{user.cv.title}</b></p> */}
                <p>Спеціальність</p>
                <p>{/* <p><b>{user.cv.profession}</b></p> */}</p>
                <p>Контакти</p>
                <p>{/* <p>{user.cv.salary}</p> */}</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner">
              <section>
                <h1>Навички</h1>
                <hr></hr>
                <p>{cv.title}</p>

                {/* <p>Grand Interactive, llc. | Mobile App Developer</p> */}

                {/* <p>
                Raised $78,000 in early stage funding, created initial design
                concepts, and oversaw initial development. Currently oversee and
                maintain all front end code and server functionality.
              </p> */}
                <p>{cv.keyInfo}</p>
              </section>

              <section>
                <h1>Досвід роботи</h1>
                <hr></hr>
                <p>Grand Interactive, llc. | Mobile App Developer</p>
                <ul>{/* <li>{user.cv.experience}</li> */}</ul>
              </section>

              <section>
                <h1>Знання</h1>
                <hr></hr>
                <ul className="skill-set">
                  {userSkills.map((skill) => (
                    <li>{skill}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h1>Додаткова інформація</h1> <hr></hr>
                <p> </p>
                <p>(617) 448-0910 | wgrand@grandinteractive.com</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </ScCVPage.ScCVPage>
  );
};

export default CVPage;
