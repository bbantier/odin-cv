export default function Form({ fields, submitFunction, previous }) {
  const getValue = (fieldName) => {
    const entry = previous.find((field) => {
      const [key, _value] = field;
      return key === fieldName;
    });

    return !entry ? "" : entry[1];
  };

  return (
    <form onSubmit={submitFunction}>
      {fields.map((field) => {
        return (
          <div key={field.name} className="input-wrapper">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              name={field.name}
              type={field.type}
              defaultValue={getValue(field.name)}
            ></input>
          </div>
        );
      })}
      <button type="submit">Submit</button>
    </form>
  );
}