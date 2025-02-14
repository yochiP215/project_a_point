
import React from "react";
import { useDispatch } from "react-redux";
import person from "../../assets/person.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import eye from "../../assets/eye.svg";
import Avatar from '@mui/material/Avatar';
import { toggleStar } from "./contactSlice";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import "../../styles/OneContact.css";

const OneContact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleStarClick = () => {
    dispatch(toggleStar(contact));
  }

  return (
    <tr className="table-row">
      <td className="table-cell">
        <Avatar src="../assets/Avatar.svg" sx={{ width: 25, height: 25 }} />
      </td>
      <td className="table-cell">{contact.contactType}</td>
      <td className="table-cell">{contact.firstName} {contact.lastName}</td>
      <td className="table-cell">{contact.role}</td>
      <td className="icon-cell">
        <img src={person} alt="Person" />
        <img src={phone} alt="Phone" />
        <img src={email} alt="Email" />
      </td>
      <td className="table-cell">

        <button
          onClick={handleStarClick}
          style={{
            background: "none",
            border: "none",
            padding: 0,
          }}
        >
          {contact.isStarred ? <StarIcon /> : <StarBorderIcon />}
        </button>
      </td>
      <td className="table-cell">
        <img src={eye} alt="View" />
      </td>
    </tr>
  );
};

export default OneContact;
