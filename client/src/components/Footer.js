import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Work</h6>
            <p className="text-justify">Написати тут ще щось про сайт. </p>
          </div>
          <div className="col-xs-5 col-md-3">
            <h6>Категорії</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">
                  JavaScript
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  C++
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  Python
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  UI/UX
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">PHP</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Посилання</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/about/">Домашня сторінка</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contact/">Мій профіль</a>
              </li>
              <li>
                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                  Вакансії
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/privacy-policy/">Резюме</a>
              </li>
              <li>
                <a href="http://scanfcode.com/sitemap/">Категорії</a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              {" "}
              2021 - Ільченко Єлизавета Ігорівна - Група ПП - 41
            </p>
            <p className="copyright-text"> Дипломна робота</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
