import React, { useState } from 'react';
import useForm from './hooks/useform.js';
import useValidation from './hooks/usevalidation.js';
import validate from './utils/validations';
import Modal from './components/Model.jsx';

const JobApplicationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: '',
  };

  const { values, handleChange, errors, setErrors } = useForm(initialValues);
  const validationErrors = useValidation(values, validate);
  const [isopen, setIsopen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // alert(JSON.stringify(values, null, 2));
      setIsopen(true)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-300">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
        <h1 className="text-xl font-bold text-center mb-4 text-red-600">Job Application Form</h1>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          {errors.phoneNumber && <p className="text-red-600">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Applying for Position
          </label>
          <select
            name="position"
            value={values.position}
            onChange={handleChange}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          >
            <option value="">Select a position</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
          </select>
        </div>

        {['Developer', 'Designer'].includes(values.position) && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Relevant Experience (years)
            </label>
            <input
              type="number"
              name="relevantExperience"
              value={values.relevantExperience}
              onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.relevantExperience && <p className="text-red-600">{errors.relevantExperience}</p>}
          </div>
        )}

        {values.position === 'Designer' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Portfolio URL
            </label>
            <input
              type="text"
              name="portfolioURL"
              value={values.portfolioURL}
              onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.portfolioURL && <p className="text-red-600">{errors.portfolioURL}</p>}
          </div>
        )}

        {values.position === 'Manager' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Management Experience
            </label>
            <input
              type="text"
              name="managementExperience"
              value={values.managementExperience}
              onChange={handleChange}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.managementExperience && <p className="text-red-600">{errors.managementExperience}</p>}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Skills
          </label>
          <div className="mt-1 flex flex-wrap gap-2">
            {['JavaScript', 'CSS', 'Python'].map((skill) => (
              <div key={skill} className="flex items-center">
                <input
                  type="checkbox"
                  name="additionalSkills"
                  value={skill}
                  checked={values.additionalSkills.includes(skill)}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">{skill}</label>
              </div>
            ))}
          </div>
          {errors.additionalSkills && <p className="text-red-600">{errors.additionalSkills}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Interview Time
          </label>
          <input
            type="datetime-local"
            name="preferredInterviewTime"
            value={values.preferredInterviewTime}
            onChange={handleChange}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
          {errors.preferredInterviewTime && <p className="text-red-600">{errors.preferredInterviewTime}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
      {isopen && <Modal data={values} />}
    </div>
  );
};

export default JobApplicationForm;
