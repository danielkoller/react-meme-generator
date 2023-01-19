export default function TemplateSelector({ template, setTemplate }) {
  return (
    <div>
      <label htmlFor="template-selector">Meme template:</label>
      <input
        id="template-selector"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
      />
    </div>
  );
}
