import { useState } from "react";
import "../style/Section.css";
import Form from "./Form";

export default function Section({ title, fields }) {
  const [submitted, setSubmitted] = useState(false);

  const submitForm = () => {
    setSubmitted(!submitted);
  };

  return (
    <section style={{display: submitted ? "none" : "block"}} className="section">
      <h2>{title}</h2>
      <Form
        onSubmit={submitForm}
        fields={fields}
      />
    </section>
  );
}
