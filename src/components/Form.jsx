export default function Form({ fields }) {
  return (
    <form>
      {fields.map((field) => {
        return (
          <label key={field.name} htmlFor={field.name}>
            {field.label}
            <input name={field.name} type={field.type} />
          </label>
        );
      })}
    </form>
  );
}
