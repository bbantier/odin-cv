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
    { name: "study", label: "Title", type: "text", required: true },
    { name: "study-year", label: "Year", type: "number", required:true },
  ];

  const exp = [
    { name: "company", label: "Company", type: "text", required: true },
    { name: "period", label: "Period", type: "text", required: true },
    { name: "position", label: "Position", type: "text", required: true },
    { name: "responsbilities", label: "Responsabilities", type: "text", required: true },
  ]

  return (
    <>
      <h1 className="noprint">Build your CV</h1>
      <Section title={"Information"} fields={info} />
      <Section title={"Education"} fields={edu} iterable={true} />
      <Section title={"Professional Experience"} fields={exp} iterable={true} />
    </>
  );
}

export default App;
