const Input = ({ label }) => {
  return (
    <span>
      <label>{label}</label>
      <input type="text" required />
    </span>
  );
};

export default Input;
