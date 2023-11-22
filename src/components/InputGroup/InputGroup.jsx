import Input from "../Input/Input.jsx";

const InputGroup = ({ dataInput, onChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Input"
          value={dataInput.initialInvestment}
          inputChange={(event) =>
            onChange("initialInvestment", event.target.value)
          }
        />
        <Input
          label="Annual Investment"
          value={dataInput.annualInvestment}
          inputChange={(event) =>
            onChange("annualInvestment", event.target.value)
          }
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected Return"
          value={dataInput.expectedReturn}
          inputChange={(event) =>
            onChange("expectedReturn", event.target.value)
          }
        />
        <Input
          label="Duration"
          value={dataInput.duration}
          inputChange={(event) => onChange("duration", event.target.value)}
        />
      </div>
    </section>
  );
};

export default InputGroup;
