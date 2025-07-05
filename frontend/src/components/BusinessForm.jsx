import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const BusinessForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      if (!name || !location) {
        alert('Please fill all fields');
        return;
      }
      setLoading(true);
      const formData = { name, location };
      onSubmit(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setName('');
      setLocation('');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4 my-4 border rounded shadow-sm bg-light" style={{ maxWidth: '500px' }}>
      <h4 className="text-center mb-4">Business Info</h4>

      <div className="mb-3">
        <label htmlFor="businessName" className="form-label">Business Name</label>
        <input
          type="text"
          id="businessName"
          name="name"
          className="form-control"
          placeholder="e.g., Cake & Co"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="location" className="form-label">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          className="form-control"
          placeholder="e.g., Mumbai"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
        {isLoading ? <ClipLoader size={25} color="#fff" /> : 'Get Reviews'}
      </button>
    </form>
  );
};

export default BusinessForm;
