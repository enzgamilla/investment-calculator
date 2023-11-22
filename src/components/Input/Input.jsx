const Input = ({ label }) => {
  return (
    <span>
      <label>{label}</label>
      <input type="number" required />
    </span>
  );
};

export default Input;
