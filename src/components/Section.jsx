import "../style/Section.css";
import "../style/Form.css";
import { useState } from "react";

export default function Section({ title, fields, multi }) {
  const [data, setData] = useState({});
  const [isSent, setIsSent] = useState(false);
  const [subs, setSubs] = useState([]);
  const entries = Object.entries(data);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setData(formJson);
    setSubs([...subs, <Subsection entries={entries} clickFn={handleEdit} />]);
    console.log(subs);
    setIsSent(!isSent);
  }

  function handleEdit() {
    setIsSent(!isSent);
  }

  function addSubsection() {
    return (
      <Form submitFn={handleSubmit} fields={fields} entries={entries} />
    )
  }

  return (
    <section className={"section" + (isSent ? " sent" : "")}>
      <h2 className="section-title">{title}</h2>
      {!isSent ? (
        <Form submitFn={handleSubmit} fields={fields} entries={entries} />
      ) : (
        <Subsection entries={entries} clickFn={handleEdit} />
      )}
      {multi && isSent ? (
        <button onClick={addSubsection} className="add-btn noprint">Add new</button>
      ) : null}
    </section>
  );
}

function Form({submitFn, fields, entries}) {
  function getValue(name) {
    const entry = entries.find((entry) => {
      const [key, _value] = entry;
      return key === name;
    });

    return !entry ? "" : entry[1];
  }

  return (
    <form onSubmit={submitFn}>
      {fields.map((field) => {
        return (
          <div key={field.name} className="input-wrapper">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              name={field.name}
              defaultValue={getValue(field.name)}
            ></input>
          </div>
        )
      })}
      <button type="submit">Submit</button>
    </form>
  )
}

function Subsection({ entries, clickFn }) {
  return (
    <div className="subsection">
      {entries.map((entry) => {
        const [key, value] = entry;
        return (
          <p className={key} key={key}>
            {value}
          </p>
        );
      })}
      <button onClick={clickFn} className="edit-btn noprint">
        Edit
      </button>
    </div>
  );
}
