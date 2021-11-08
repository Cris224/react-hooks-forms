import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFisrtNameChange(e){
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e){
    setLastName(e.target.value)
  }

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFisrtNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
