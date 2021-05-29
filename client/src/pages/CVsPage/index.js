import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-bootstrap";
import { useFetch } from "hooks/useFetch";
import { Link } from "react-router-dom";
import Search from "components/Search";

import * as ScCVsPage from "./styled";
import CVCard from "cards/CVCard";

const CVsPage = () => {
  const [getUsersRequest, { data: users }] = useFetch();

  const [sortedUsers, setSortedUsers] = useState(users);

  useEffect(() => {
    getUsersRequest("get", "auth");
  }, [getUsersRequest]);

  useEffect(() => {
    if (users == null) return;

    setSortedUsers(users);
  }, [users]);

  if (sortedUsers == null) return null;

  return (
    <ScCVsPage.ScCVsPage>
      <Search
        searchData={users}
        searchKeys={["cv.title", "cv.profession"]}
        onResult={(res) => setSortedUsers(res)}
      />

      {sortedUsers?.map((user) => {
        const cv = "cv" in user === true ? user.cv : null;

        if (cv == null) return null;

        console.log("cv", cv);

        return (
          <CVCard user={user} cv={cv} key={user._id} />

          //   <div className="NewVacsCard" key={user._id}>
          //     <div className="NewVacsCard_Category">
          //       <h2>{user.name}</h2>
          //     </div>
          //     <p className="grtext">Повне ім'я:</p>
          //     <div className="NewVacsCard_Main">
          //       <b>Some Name</b>
          //     </div>
          //     <hr></hr>
          //     <p className="grtext">Рівень розробника:</p>
          //     <b>Middle</b> <hr></hr>
          //     <Link to={`user/${user._id}`} className="NewVacsCard_Link">
          //       Дивитись повністю
          //     </Link>
          //   </div>
        );
      })}
    </ScCVsPage.ScCVsPage>
  );
};

export default CVsPage;
