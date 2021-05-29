import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import * as ScUser from "./styled";
import { Dropdown } from "react-bootstrap";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
  const { isAuthenticated, user, logOut } = useContext(AuthContext);

  return (
    <ScUser.UserSimple>
      <ScUser.AvatarImage
        as={Link}
        to='/profile'
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      </ScUser.AvatarImage>

      <Link to='/profile'>{user?.userName}</Link>
    </ScUser.UserSimple>
  )
});

const User = () => {
  const { isAuthenticated, user, logOut } = useContext(AuthContext);

  return (
    <ScUser.ScUser>
      {!isAuthenticated ? (
        <>
          <Link to='/login'>Авторизація</Link>{' '} / {' '}
          <Link to='/register'>Реєстрація</Link>
        </>
      ) : (
        <>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" as={CustomToggle} >
              <span>{user?.userName.charAt(0).toUpperCase()}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={logOut}>Вийти</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


        </>
      )}
    </ScUser.ScUser>
  );
};

export default User;
