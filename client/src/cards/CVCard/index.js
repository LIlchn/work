import React from "react";
import { Link } from "react-router-dom";

import * as ScCVCard from "./styled";

const CVCard = ({ user, cv }) => {
  console.log("user", user);

  return (
    <ScCVCard.ScCVCard>
      <ScCVCard.Avatar src={`https://i.pravatar.cc/300?u=${user._id}`} />
      <ScCVCard.Col>
        <ScCVCard.Title>{cv.title}</ScCVCard.Title>
        <ScCVCard.SubTitleRow>
          <ScCVCard.SubTitleRowItem>
            Exp: <span>{cv.experience}y</span>
          </ScCVCard.SubTitleRowItem>
          <ScCVCard.SubTitleRowItem>
            Email: <a href={`mailto:${user.email}`}>{user.email}</a>
          </ScCVCard.SubTitleRowItem>
        </ScCVCard.SubTitleRow>
        <ScCVCard.SubTitle>
          Profession: <span>{cv.profession}</span>
        </ScCVCard.SubTitle>
        <ScCVCard.Action as={Link} to={`user/${user._id}`}>
          More info
        </ScCVCard.Action>
      </ScCVCard.Col>
    </ScCVCard.ScCVCard>
  );
};

export default CVCard;
