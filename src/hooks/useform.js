import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      if (checked) {
        setValues((prevValues) => ({
          ...prevValues,
          [name]: [...(prevValues[name] || []), value],
        }));
      } else {
        setValues((prevValues) => ({
          ...prevValues,
          [name]: prevValues[name].filter((skill) => skill !== value),
        }));
      }
    } else {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
  };
};

export default useForm;
