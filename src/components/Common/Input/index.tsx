import "./Input.css";

type InputProps = {
  name: string;
  value: string;
  placeholder?: string;
  type?: string;

  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;

  error?: string;
  touched?: boolean;
};

const Input = ({
  name,
  value,
  placeholder,
  type = "text",
  onChange,
  onBlur,
  error,
  touched,
}: InputProps) => {
  return (
    <div className="input-container">
      <input
        className="input-field"
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />

      {touched && error && (
        <p className="error-text">{error}</p>
      )}
    </div>
  );
};

export default Input;