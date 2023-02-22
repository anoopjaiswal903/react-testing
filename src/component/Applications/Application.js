import React from "react";

const Application = () => {
  return (
    <>
      <h1>job Application form</h1>
      <h2>Section 1</h2>
      <p>all field are mandatory</p>
      <img src="gmail.com" alt="a person with laptop" />
      <span title="close">X</span>
      <div data-testid="custom-element">CUSTOM HTML ELEMENT</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="fullName"
            value="Vishwash"
            onChange={() => {}}
          />
        </div>

        {/* <div>
          <label htmlFor="name">Bio</label>
          <textarea name="bio" id="bio" />
        </div> */}
        <div>
          <label htmlFor="name">Name</label>
          <select id="job-location ">
            <option value="">select a country</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="CANADA">CANADA</option>
            <option value="INDIA">INDIA</option>
            <option value="AUSTRALIA">AUSTRALIA</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="term" />i agree term and condition
          </label>
        </div>
        <button>submit</button>
      </form>
    </>
  );
};

export default Application;
