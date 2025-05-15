import "../style/Section.css";
import "../style/Form.css";
import { useState } from "react";

export default function Section({ title, fields }) {
  const [data, setData] = useState({});
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setData(formJson);
    setIsSent(!isSent);

    console.log(formJson);
  }

  const entries = Object.entries(data);

  return (
    <section className={"section" + (isSent ? " sent" : "")}>
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
        <div>
          {entries.map((entry) => {
            const [key, value] = entry;
            return <p className={key} key={key}>{value}</p>;
          })}
        </div>
      )}
    </section>
  );
}