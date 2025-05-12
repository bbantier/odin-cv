import "../style/Section.css";
import "../style/Form.css";
import { useState } from "react";

export default function Section({ title, fields }) {
  const [values, setValues] = useState({});
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setValues(formJson);
    setIsSent(!isSent);

    console.log(formJson);
  }

  return (
    <section className="section">
      <h2>{title}</h2>
      {!isSent ? (
        <form onSubmit={handleSubmit}>
          {fields.map((field) => {
            return (
              <div key={field.name} className="input-wrapper">
                <label htmlFor={field.name}>{field.label}</label>
                <input name={field.name}></input>
              </div>
            );
          })}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>{values.fname}</p>
      )}
    </section>
  );
}
