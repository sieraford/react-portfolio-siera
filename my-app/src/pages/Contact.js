import React, { useState } from 'react';

function Contact() {

  return (
    <div>
      <h1>Contact</h1>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" required/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Email</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" required/>
        </div>
        <div clasName="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea clasName="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2">Submit</button>
      </form>
    </div>
  );
}

export default Contact;