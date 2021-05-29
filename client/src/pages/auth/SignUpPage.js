
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

import { AuthContext } from "context/AuthContext";
import { useFetch } from "hooks/useFetch";
import * as ScAuthForm from './styled'

const SignUpPage = () => {

  const { logIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registerUser] = useFetch();

  const onSubmit = async ({ email, password }) => {
    const { response, error } = await registerUser("post", "auth/register", {
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
        <h2>Створити власний аккаунт</h2> <hr></hr>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Поштова скринька</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            {...register("email", { required: true })} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword"><hr></hr>
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Password"
            {...register("password", { required: true })} />
        </Form.Group>
        <hr></hr>
        <Button variant="dark" type="submit">
          Зареєструватись
          </Button>
      </Form>

    </ScAuthForm.ScAuthForm>
  );
};

export default SignUpPage;
