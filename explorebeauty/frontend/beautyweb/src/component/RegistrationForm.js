import React from 'react';

const RegistrationForm = () => {
  return (
    <div className="Formcontainer">
      <form>
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;