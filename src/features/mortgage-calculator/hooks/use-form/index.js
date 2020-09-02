import { useState, useEffect, useRef } from "react";

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (!formRendered.current) {
      setValues(initialValues);
      setErrors({});
      setSubmitting(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    if (!value) {
      setErrors({ ...errors, [name]: "error" });
    } else {
      setErrors({ ...errors, [name]: null });
    }
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.persist();
      event.preventDefault();
    }
    setSubmitting(true);
    setErrors({ ...errors });
    onSubmit({ values, errors });
    setSubmitting(false);
  };

  return {
    values,
    errors,
    handleChange,
    submitting,
    handleSubmit,
  };
};

export default useForm;
