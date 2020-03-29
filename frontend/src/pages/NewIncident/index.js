import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (err) {
      alert("Error deleting case, try again");
    }
  }

  return (
    <div className="new-incidente-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register new case</h1>
          <p>Describe the case in detail to find a hero to solve it</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="e02041" />
            Back Home
          </Link>
        </section>
        <form>
          <input
            placeholder="Case title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Dollar value"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button onClick={handleNewIncident} className="button" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
