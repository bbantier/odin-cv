import "../style/Form.css";

export default function Form({ fields }) {
  return (
    <form>
      {fields.map((field) => {
        return (
          <div key={field.name} className="input-wrapper">
            <label
              htmlFor={field.name}
              className={field.required ? "required" : ""}
            >
              {field.label}
            </label>
            <input
              name={field.name}
              type={field.type}
              required={field.required}
            />
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
