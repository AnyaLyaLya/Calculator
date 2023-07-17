import { ChangeEvent, FC } from "react";
import { Operations } from "../../types/Operations";
import cn from 'classnames';
import './select.scss';

interface Props {
  operation: Operations;
  setOperation: (operation: Operations) => void;
}

export const Select: FC<Props> = ({ operation, setOperation }) => {
  const operationOptions = Object.values(Operations);

  const handleOperationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setOperation(event.target.value as Operations);
  };

  return (
    <div className="custom-select">
          <select
            value={operation}
            onChange={handleOperationChange}
            className="custom-select__select"
          >
            {operationOptions.map((op) => (
              <option
                key={op}
                value={op}
                className={cn(
                  'custom-select__option', 
                  { 'custom-select__option--selected':  op === operation },
                )}
              >
                {op}
              </option>
            ))}
          </select>
          <div className="custom-select__arrow" />
    </div>
  );
};