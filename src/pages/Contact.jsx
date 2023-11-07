import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Your information has been submitted`);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container text-center" style={{ marginTop: "100px" }}>
      <h1>Submit Your Contact Info</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <input
          value={email}
          name="Email Address"
          onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={phone}
          name="Phone Number"
          onChange={handleInputChange}
          type="text"
          placeholder="Phone Number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
