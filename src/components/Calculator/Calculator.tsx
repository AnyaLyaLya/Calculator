import { FC, FormEvent, useState } from 'react';
import { Select } from '../Select';
import { Input } from '../Input/Input';
import { Operations } from '../../types/Operations';
import ABI from '../../utils/CalculatorContractABI.json'
import cn from 'classnames';
import Web3 from 'web3';

import './calculator.scss';

interface Props {
  isMetamaskConnected: boolean;
}

export const Calculator: FC<Props> = ({ isMetamaskConnected }) => {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [result, setResult] = useState('');
  const [usageCount, setUsageCount] = useState(0);
  const [operation, setOperation] = useState<Operations>(Operations.ADD);

  const web3 = new Web3('https://sepolia.etherscan.io/address/0x1851ffbce02a134efd9ddbc91920b0c6dcefb6f5');

  const contractAddress = '0x1851ffbce02a134efd9ddbc91920b0c6dcefb6f5'; 
  const userAddress = '0x2A59028a24E4886258f84e09AEb7b3377B414752';
  
  const contract = new web3.eth.Contract(ABI, contractAddress);

  const handleCalculate = async (event: FormEvent) => {
    event.preventDefault();

    if (valueA && valueB) {
      try {
        // @ts-ignore
        const result = await contract.methods.add(parseInt(valueA), parseInt(valueB)).call({ from: userAddress });
        console.log(result);
        if (typeof result !== 'undefined') {
          setResult(result.toString());
        }
      } catch (error) {
        console.error('Помилка виконання контракту:', error);
      }
    }

    /*if (valueA && valueB) {
      let calculatedResult: number;

      switch (operation) {
        case Operations.ADD:
          calculatedResult = parseFloat(valueA) + parseFloat(valueB);
          break;
        case Operations.SUBTRACT:
          calculatedResult = parseFloat(valueA) - parseFloat(valueB);
          break;
        case Operations.MULTIPLY:
          calculatedResult = parseFloat(valueA) * parseFloat(valueB);
          break;
        case Operations.DIVIDE:
          calculatedResult = parseFloat(valueA) / parseFloat(valueB);
          break;
        default:
          calculatedResult = 0;
          break;
      }

      setResult(calculatedResult.toString());
    }*/
  };

  return (
    <div className="calculator">
      <form action="#" className="calculator__form" onSubmit={handleCalculate}>
        <h2 className="calculator__title">Calculator</h2>

        <Input
          value={valueA}
          onChange={setValueA}
          placeholder="Value A"
        />

        <Select operation={operation} setOperation={setOperation} />

        <Input
          value={valueB}
          onChange={setValueB}
          placeholder="Value B"
        />

        <div className="calculator__result">
          <p className="calculator__result-label">Result:</p>
          <p className="calculator__result-value">{result}</p>
        </div>

        <button 
          className={cn(
            'calculator__button', 
            { 'calculator__button--disabled': !isMetamaskConnected },
          )}
          disabled={!isMetamaskConnected}
          type="submit"
        >
          Calculate
        </button>
        {isMetamaskConnected && (
          <p className='calculator__used-count'>
            Used count: {usageCount}
          </p>
        )}
      </form>
    </div>
  );
};
