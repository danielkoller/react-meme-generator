export default function TemplateSelector({ template, setTemplate }) {
  return (
    <div>
      <label htmlFor="template-selector">Meme template: </label>
      <input
        placeholder="Enter your meme here"
        id="template-selector"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
      />
    </div>
  );
}
