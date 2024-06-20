import { useState } from "react";
import useForm from './hooks/useform';
import useValidation from './hooks/usevalidation'
import Modal from "./components/Model";

function App() {

  const [formValues, handleInputChange] = useForm({ name: '', email: '', age: '', attendingWithGuest: 'No', guestName: '' });
  const [errors, validate] = useValidation(formValues);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formValues);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
        <h1 className="text-red-600 text-center font-bold text-xl mb-2">Event Registration Form</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="text" name="name" value={formValues.name} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          {errors.name && <div className="text-red-500 text-xs italic">{errors.name}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" name="email" value={formValues.email} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          {errors.email && <div className="text-red-500 text-xs italic">{errors.email}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
          <input type="number" name="age" value={formValues.age} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          {errors.age && <div className="text-red-500 text-xs italic">{errors.age}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Are you attending with a guest?</label>
          <select name="attendingWithGuest" value={formValues.attendingWithGuest} onChange={handleInputChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        {formValues.attendingWithGuest === "Yes" && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Guest Name:</label>
            <input type="text" name="guestName" value={formValues.guestName} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            {errors.guestName && <div className="text-red-500 text-xs italic">{errors.guestName}</div>}
          </div>
        )}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        {submittedData && <Modal data={submittedData} />}
      </form>
    </>
  );
}

export default App;
