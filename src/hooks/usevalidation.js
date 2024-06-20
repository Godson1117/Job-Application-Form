import { useState } from "react";

function useValidation(values) {
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      let tempErrors = {};
      if (!values.name) tempErrors.name = "Name is required";
      if (!values.email) {
        tempErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        tempErrors.email = "Email is not valid";
      }
      if (!values.age || values.age <= 0) tempErrors.age = "Age must be greater than 0";
      if (values.attendingWithGuest === "Yes" && !values.guestName) tempErrors.guestName = "Guest name is required if attending with a guest";
  
      setErrors(tempErrors);
      return Object.keys(tempErrors).length === 0;
    };
  
    return [errors, validate];
}

export default useValidation