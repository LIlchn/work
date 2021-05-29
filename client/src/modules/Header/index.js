import React from "react";

import User from "components/User";

import * as ScHeader from "./styled";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <ScHeader.ScHeader>
      <ScHeader.ScNavItem as={NavLink} to="/">
        Головна сторінка
      </ScHeader.ScNavItem>
      <ScHeader.ScNavItem as={NavLink} to="/newvacs">
        Вакансії
      </ScHeader.ScNavItem>
      <ScHeader.ScNavItem as={NavLink} to="/newcv">
        Резюме
      </ScHeader.ScNavItem>
      <ScHeader.ScNavItem as={NavLink} to="/resumepage">
        Тестова сторінка
      </ScHeader.ScNavItem>
      <User />
    </ScHeader.ScHeader>
  );
};

export default Header;
