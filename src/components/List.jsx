import React from "react";

const list=()=>{
  let arrPerson=[];
  return(
    <>
    <div>
      <h2>all contacts</h2>
      <ul>
      {arrPerson.map((contact)=>(<li key={contact.id}>
        <One one={contact}/>
       </li>
        ))}
      </ul>
      
    </div>
    </>
  )


}

export default ContactsFilter;
