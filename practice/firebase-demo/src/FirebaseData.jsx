import React, { useEffect, useState } from "react";
import { database } from "./firebase";
const FirebaseData = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const createUser = async () => {
    // let res = await database.users.add({name,age});
    // create command
    let res = await database.users.doc("1111111").set({ name, age });
    console.log(res);
  };

  
  useEffect(() => {
    async function fetchData(){
    let uid = "eok6CuFZRrzSqlB6FXME";
    // let data = await database.users.doc(uid).get();
    // let data = await database.users.orderBy("createdAt", "desc").get(); //onSnapShot //READ

    // console.log(data.data());

    let data = await database.users.get();

    data.forEach((obj) => console.log(obj.data()));
    }
    fetchData();
  });

  let update = async () => {
    let uid = "eok6CuFZRrzSqlB6FXME";
    // eok6CuFZRrzSqlB6FXME
    await database.users.doc(uid).update({
      //UPDATE COMMAND
      name,
      age,
    });
  };

  let deletee = async () => {
    let uid = "1111111";
    await database.users.doc(uid).delete();
  };

  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {/* <button onClick={createUser}>Create</button> */}
      <button onClick={update}>Create</button>
      <button onClick={deletee}>Delete</button>
    </div>
  );
};

export default FirebaseData;
