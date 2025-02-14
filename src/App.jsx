import React, { useEffect, useState } from "react";
import List from "./features/contact/ListTable";
import { useDispatch } from "react-redux";
import { pushDataToArrContacts } from "./features/contact/contactSlice";
import AddContactForm from "./features/sidePanel/AddContact";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    try {
      const response = await fetch("data/contactsData.json");
      const data = await response.json();
      dispatch(pushDataToArrContacts(data));
    }
    catch (error) {
      console.log("cannot load data", error);
    }
  };
  return (
    <>
      <AddContactForm />
      <List />

    </>
  )
};

export default App;
