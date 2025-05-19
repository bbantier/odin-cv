export default function Display({ entries, editFunction }) {
  return (
    <div className="submitted">
      {entries.map((entry) => {
        const [key, value] = entry;
        return (
          <p className={key} key={key}>
            {value}
          </p>
        );
      })}
      <button onClick={editFunction} className="edit-btn noprint">
        Edit
      </button>
    </div>
  );
}