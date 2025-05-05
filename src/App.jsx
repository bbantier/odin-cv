import "./App.css";
import Section from "./components/Section";

function App() {
  const info = [
    { name: "fname", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel" },
  ];

  const edu = [
    { name: "school", label: "School Name", type: "text", required: true },
    { name: "study", label: "Title of Study", type: "text", required: true },
    { name: "study-date", label: "Date of Study", type: "number", required:true },
  ];

  return (
    <>
      <h1 className="noprint">Build your CV</h1>
      <Section title="Information" fields={info} />
    </>
  );
}

export default App;
