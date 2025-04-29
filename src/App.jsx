import "./App.css";
import Section from "./components/Section";

function App() {
  const info = [
    { name: "fname", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone Number", type: "tel" },
  ];

  const edu = [
    { name: "school", label: "School Name", type: "text" },
    { name: "study", label: "Title of Study", type: "text" },
    { name: "study-date", label: "Date of Study", type: "number" },
  ];

  return (
    <>
      <h1>Build your CV</h1>
      <Section title="Information" fields={info} />
      <Section title="Education" fields={edu} />
    </>
  );
}

export default App;
