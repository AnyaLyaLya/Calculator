import { ChangeEvent, FC } from 'react';
import './input.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="calculator__input-box">
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
