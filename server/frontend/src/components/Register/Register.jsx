
import React, { useState } from "react";

function Register() {
const [formData, setFormData] = useState({
username: "",
firstName: "",
lastName: "",
email: "",
password: "",
});

const handleChange = (event) => {
setFormData({
...formData,
[event.target.name]: event.target.value,
});
};

const handleSubmit = (event) => {
event.preventDefault();
alert("Registration form submitted successfully!");
};

return ( <div style={styles.container}> <div style={styles.card}> <h1 style={styles.heading}>Sign-up</h1> <p style={styles.description}>
Create your account by filling in the details below. </p>

```
    <form onSubmit={handleSubmit}>
      <div style={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" style={styles.button}>
        Register
      </button>
    </form>
  </div>
</div>
```

);
}

const styles = {
container: {
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
backgroundColor: "#f3f6fb",
padding: "20px",
fontFamily: "Arial, sans-serif",
},
card: {
width: "100%",
maxWidth: "420px",
padding: "30px",
backgroundColor: "#ffffff",
borderRadius: "12px",
boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
},
heading: {
textAlign: "center",
color: "#153e75",
marginBottom: "10px",
},
description: {
textAlign: "center",
color: "#666666",
marginBottom: "25px",
},
formGroup: {
display: "flex",
flexDirection: "column",
marginBottom: "16px",
gap: "7px",
},
button: {
width: "100%",
padding: "12px",
backgroundColor: "#153e75",
color: "#ffffff",
border: "none",
borderRadius: "6px",
fontSize: "16px",
fontWeight: "bold",
cursor: "pointer",
marginTop: "8px",
},
};

export default Register;
