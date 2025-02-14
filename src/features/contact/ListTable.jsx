
import React from "react";
import { useSelector } from "react-redux";
import Avatar from '@mui/material/Avatar';
import OneContact from "./OneContact";
import "../../styles/ListTable.css";


const ListTable = () => {
 
  let arrPeople = useSelector(state => state.contacts.arrContacts);

  return (
    <div className="list-container">
      <h2 className="list-title">Contacts</h2>
      <div className="table-container">
        <table className="contact-table">
          <thead>
            <tr>
              <th><Avatar src="../../assets/Avatar.svg" sx={{ width: 25, height: 25 }} /></th>
              <th>Contact Type</th>
              <th>Name</th>
              <th>Role</th>
              <th>Contact Details</th>
              <th>Main Contact</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {arrPeople.map((contact, index) => (
              <OneContact key={index} contact={contact} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTable;
