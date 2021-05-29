import React, { useEffect, useContext } from "react";
import { Tab, Tabs, Jumbotron, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useFetch } from "hooks/useFetch";
import { AuthContext } from "context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [getProfileVacancies, { data: vacanciesPersonal }] = useFetch();

  console.log("user", user);

  useEffect(() => {
    getProfileVacancies("get", "vacancies/personal");
  }, [getProfileVacancies]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const [changeCV] = useFetch();

  const onSubmit = async ({
    title,
    profession,
    keyInfo,
    language,
    experience,
    salary,
  }) => {
    const { response, error } = await changeCV("put", "auth/cv", {
      title,
      profession,
      keyInfo,
      language,
      experience,
      salary,
    });
    console.log("response", response);
    console.log("error", error);

    if (error != null && !response) {
      console.log("error", error);
      return;
    }

    history.push("/profile");
  };

  return (
    <Tabs
      className="Tabbbbs"
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      style={{}}
    >
      <Tab className="Killmepls" eventKey="profile" title="Мої вакансії">
        <ul>
          {vacanciesPersonal?.length === 0 && "Empty"}
          {vacanciesPersonal?.map((vacancy, index) => {
            return (
              <div>
                <hr></hr>
                <Link to={`/vacancy/${vacancy._id}`} key={index}>
                  {vacancy.name}{" "}
                </Link>
              </div>
            );
          })}
          <hr></hr>
        </ul>
        <Link class="btn btn-dark" to="/vacancy-creation" role="button">
          Створити нову вакансію
        </Link>
      </Tab>
      <Tab className="Killmepls" eventKey="contact" title="Аккаунт">
        <Jumbotron className="jumbotron-acc" fluid>
          <Container>
            <h1>В РОЗРОБЦІ</h1>
            <hr></hr>
          </Container>
        </Jumbotron>
        <p></p>
        <p></p>
        <p></p>
      </Tab>
      <Tab eventKey="cv" title="Моє резюме">
        <Form className="RegFormGr" onSubmit={handleSubmit(onSubmit)}>
          <div className="Killmepls">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Повне ім'я</Form.Label>
              <Form.Control
                placeholder="Enter your full name"
                {...register("title", { required: true })}
                defaultValue={user?.cv?.title}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Спеціальність</Form.Label>
              <Form.Control
                placeholder="Write your specialty"
                {...register("profession", { required: true })}
                defaultValue={user?.cv?.profession}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Навички</Form.Label>
              <Form.Control
                placeholder="Enter your main working skills"
                {...register("keyInfo", { required: true })}
                defaultValue={user?.cv?.keyInfo}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Володіння мовами</Form.Label>
              <Form.Control
                placeholder="It's about speaking"
                {...register("language", { required: true })}
                defaultValue={user?.cv?.language}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Досвід роботи</Form.Label>
              <Form.Control
                placeholder="Write smthg about your exp"
                {...register("experience", { required: true })}
                defaultValue={user?.cv?.experience}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Контакти</Form.Label>
              <Form.Control
                placeholder="Enter your preferred salary"
                {...register("salary", { required: true })}
                defaultValue={user?.cv?.salary}
              />
            </Form.Group>

            <Button variant="dark" type="submit" href="/">
              Зберегти
            </Button>
          </div>
        </Form>
      </Tab>
    </Tabs>

    // <div className="MainPage">
    //     <div className="jumbotron-prof">
    //         <h1 className="display-5">My personal page</h1>
    //         <p></p>
    //     </div>

    //     <div className="ProfilePage">
    //         <ul class="nav nav-tabs" id="myTab" role="tablist">
    //             <li class="nav-item" role="presentation">
    //                 <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">My resume</button>
    //             </li>
    //             <li class="nav-item" role="presentation">
    //                 <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Selected Resume</button>
    //             </li>
    //             <li class="nav-item" role="presentation">
    //                 <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">My account</button>
    //             </li>
    //         </ul>
    //         <div class="tab-content" id="myTabContent">
    //             <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Some text</div>
    //             <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">webfiwefwufwefw</div>
    //             <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">hrhhhhhhhhh</div>
    //         </div>
    //     </div>

    // </div>
  );
};

export default Profile;
