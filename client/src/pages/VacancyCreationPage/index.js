import React from "react";
import { useFetch } from "hooks/useFetch";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { routePathsEnum } from "routes";
import { Button, Form } from "react-bootstrap";

import * as ScVacancyCreationPage from "./styled";

const VacancyCreationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const [createVacancy] = useFetch();

  const onSubmit = async ({ name, description, category, level, conditions, contact }) => {
    const { response, error } = await createVacancy("post", "vacancies", {
      name,
      description,
      category,
      level,
      conditions,
      contact,
    });

    if (error != null && !response) {
      console.log("error", error);
      return;
    }

    history.push('/profile');
  };



  return (
    <ScVacancyCreationPage.ScVacancyCreationPage>
      <div ClassName="VacCrFormGr">
        <p>Створити свою власну вакансію</p> <hr></hr>
        <Form ClassName="RegFormGr" onSubmit={handleSubmit(onSubmit)}>

          <Form.Group controlId="VacCreatePos">
            <Form.Label>Позиція</Form.Label>
            <Form.Control placeholder="Позиція"
              {...register("name", { required: true })} />
          </Form.Group>
          <hr></hr>

          <Form.Group controlId="VacCreateCat">
            <Form.Label>Категорія</Form.Label>
            <Form.Control as="select" {...register("category", { required: true })}>
              <option>JavaScript</option>
              <option>C++</option>
              <option>Python</option>
              <option>UI/UX</option>
              <option>PHP</option>
            </Form.Control>
          </Form.Group>
          <hr></hr>

          <Form.Group controlId="VacCreateLev">
            <Form.Label>Рівень</Form.Label>
            <Form.Control as="select" {...register("level", { required: true })}>
              <option>Junior</option>
              <option>Middle</option>
              <option>Senior</option>
            </Form.Control>
          </Form.Group>
          <hr></hr>

          <Form.Group controlId="VacCreateDesc">
            <Form.Label>Опис вакансії</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Обов'язки, необхідні навички, та особисті якості. "
              {...register("description", { required: true })} />
          </Form.Group>
          <hr></hr>

          <Form.Group controlId="VacCreateDesc">
            <Form.Label>Умови роботи</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Режим та зайнятість, заробітна плата, переваги. "
              {...register("conditions", { required: true })} />
          </Form.Group>
          <hr></hr>

          <Form.Group controlId="formBasicSal">
            <Form.Label>Контактні дані</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Номер телефону, поштова скринька, профіль у соц. мережі і тд."
              {...register("contact", { required: true })} />
          </Form.Group>
          <hr></hr>

          <Button variant="dark" type="submit">
            Create vacancy
          </Button>
        </Form>
      </div>
    </ScVacancyCreationPage.ScVacancyCreationPage>
  );
};

export default VacancyCreationPage;
