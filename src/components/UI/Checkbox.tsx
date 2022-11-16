import { Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  id: string;
  onCompleteTask: (param: string) => void;
}

export const Checkbox = function ({ id, onCompleteTask }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = function () {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    onCompleteTask(id);
  }, [isChecked]);

  return (
    <label className={styles.checkboxContainer}>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span className={styles.checkbox}>
        {isChecked ? <Check weight="bold" /> : ''}
      </span>
    </label>
  );
};
