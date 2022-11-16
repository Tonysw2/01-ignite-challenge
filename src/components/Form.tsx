import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Form.module.css';

interface FormProps {
  onAddTask: (text: string) => void;
}

export const Form = function ({ onAddTask }: FormProps) {
  const [text, setText] = useState('');

  const handleSubmit = function (event: FormEvent) {
    event.preventDefault();
    onAddTask(text);
    setText('');
  };

  const handleTextChange = function (event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  };

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={handleTextChange}
          type="text"
          placeholder="Add new task"
          value={text}
        />
        <button type="submit">
          Create
          <PlusCircle size={16} weight={'bold'} />
        </button>
      </form>
    </div>
  );
};
