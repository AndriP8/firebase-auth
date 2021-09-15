import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../services/Firebase";

export default function Register() {
  const [state, setState] = useState({});

  const set = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    const { email, password } = state;
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={set("email")} />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={set("password")} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
