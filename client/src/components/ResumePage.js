import { AuthContext } from "context/AuthContext";
import { useFetch } from "hooks/useFetch";
import React, { useEffect, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router-dom";

const ResumePage = () => {
  // let { id } = useParams();

  // const [getCV, { data: cv, pending }] = useFetch();

  // useEffect(() => {
  //     getCV("get", `cv/${id}`, );
  // }, [getCV]);

  // if (pending == true) {
  //     return 'loading'
  // }

  // if (cv == undefined) {

  //     return <div className="Resume-Page">
  //         <container>
  //             <p className="grtext">Not Found<b></b></p>
  //         </container>
  //     </div>
  // }

  return (
    <div className="Resume-Page">
      <div className="wrapper">
        <div className="left">
          <div className="name-hero">
            <div className="me-img" />
            <div className="left-user">
              <h1>Повне ім'я</h1>
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
              <h1>Навички</h1><hr></hr>
              {/* <li>{user.cv.language}</li> */}

              <p>Grand Interactive, llc. | Mobile App Developer</p>
              <p>
                Raised $78,000 in early stage funding, created initial design
                concepts, and oversaw initial development. Currently oversee and
                maintain all front end code and server functionality.
              </p>
            </section>

            <section>
              <h1>Досвід роботи</h1><hr></hr>
              <p>Grand Interactive, llc. | Mobile App Developer</p>
              <ul>{/* <li>{user.cv.experience}</li> */}</ul>
            </section>

            <section>
              <h1>Знання</h1><hr></hr>
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
              <h1>Додаткова інформація</h1> <hr></hr>
              <p> </p>
              <p>(617) 448-0910 | wgrand@grandinteractive.com</p>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
