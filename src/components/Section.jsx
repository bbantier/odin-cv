import "../style/section.css";
import Form from "./Form";

export default function Section({ title, fields }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <Form fields={fields} />
    </section>
  );
}
