export default function TextInput({ label, text, setText }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
