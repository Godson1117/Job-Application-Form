import { useEffect, useState } from 'react';

const useValidation = (values, validate) => {

    const [errors, setErrors] = useState({})

    useEffect(() => {
        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
        }
    }, [values, validate]);

    return errors;
};

export default useValidation;
