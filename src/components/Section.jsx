import "../style/Section.css";
import { useState } from "react";
import Form from "./Form";
import Display from "./Display";

export default function Section({ title, fields, iterable }) {
  const initialSubsection = <Subsection key={crypto.randomUUID()} fields={fields} />; 
  const [subsections, setSubsections] = useState([initialSubsection]);

  const addSubsection = () => {
    setSubsections([...subsections, crypto.randomUUID()])
  }

  return (
    <section className={"section"}>
      <h2 className="section-title">{title}</h2>
      {/* <Subsection fields={fields} /> */}
      {subsections.map((subsection) => {
        return (
          <Subsection key={subsection} fields={fields} />
        )
      })}
      {iterable ? <button onClick={addSubsection} className="add-btn noprint">Add new</button> : null}
    </section>
  );
}

function Subsection({ fields }) {
  const [data, setData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const entries = Object.entries(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setData(formJson);
    setSubmitted(!submitted);
  };

  const handleEdit = () => {
    setSubmitted(!submitted);
  };

  return (
    <div className="subsection">
      {!submitted ? (
        <Form
          submitFunction={handleSubmit}
          fields={fields}
          previous={entries}
        />
      ) : (
        <Display entries={entries} editFunction={handleEdit} />
      )}
    </div>
  );
}




