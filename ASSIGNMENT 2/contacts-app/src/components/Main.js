import React, { useEffect, useState } from "react";
// import Contacts from "./Contacts";
import Entry from "./Entry";

const ENDPOINT = "https://reqres.in/api/users?page=1";
function Main() {
  const [Contacts, setContacts] = useState();

  useEffect(() => {
    // async function fetchData() {
    //   const data = await getUserData();
    //   setContacts(data);
    // }
    // fetchData();
    fetch(ENDPOINT)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw Error("Something went wrong");
      })
      .then((data) => {
        setContacts(data);
      })
      .catch((_error) => {});
  }, []);

  if (!Contacts) {
    return null;
  }
  return (
    <>
      <dl className="container">
        {Contacts.data.map((contact) => (
          <Entry
            key={contact.id}
            id={contact.id}
            profile={contact.avatar}
            first_name={contact.first_name}
            last_name={contact.last_name}
            email={contact.email}
          />
        ))}
      </dl>
    </>
  );
}

export default Main;
