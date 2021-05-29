
import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { AuthContext } from "context/AuthContext";
import { useFetch } from "hooks/useFetch";

import * as ScAuthForm from './styled'
import { NavLink } from "react-router-dom";

const LogInPage = () => {
  const { logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registerUser] = useFetch();

  const onSubmit = async ({ email, password }) => {
    const { response, error } = await registerUser("post", "auth/login", {
      email: email,
      password: password,
    });

    if (error != null && !response) {
      console.log("error", error);
      return;
    }

    logIn(response);
  };

  return (

    <ScAuthForm.ScAuthForm >

      <Form className="RegFormGr" onSubmit={handleSubmit(onSubmit)}>
        <p>Авторизація</p><hr></hr>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Поштова скринька</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            {...register("email", { required: true })} />
        </Form.Group>
        <hr></hr>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Password"
            {...register("password", { required: true })} />
        </Form.Group>
        <hr></hr>
        <Button variant="dark" type="submit">
          Авторизація
          </Button>
        <p className="lead"> <hr></hr>
          <NavLink className="btn btn-dark btn-lg" to="/register" role="button">Реєстрація</NavLink>
        </p>

      </Form>

    </ScAuthForm.ScAuthForm>

  );
};

export default LogInPage;
