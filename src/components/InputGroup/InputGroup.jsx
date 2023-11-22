import Input from "../Input/Input.jsx";

const InputGroup = () => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input label="Initial Input" />
        <Input label="Annual Investment" />
      </div>
      <div className="input-group">
        <Input label="Expected Return" />
        <Input label="Duration" />
      </div>
    </section>
  );
};

export default InputGroup;
