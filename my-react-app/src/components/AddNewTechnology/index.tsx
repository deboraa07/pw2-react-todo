import { PlusCircle } from "phosphor-react";
import styles from "./AddNewTechnology.module.css";
import { useState } from "react";

interface IProps {
  addTechnology: (technologyName: string) => void;
}

export function AddNewTechnology({ addTechnology }: IProps) {
  const [name, setName] = useState("");

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    addTechnology(name);
    setName("");
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={name}
          placeholder="Adicione uma nova tecnologia"
          onChange={(e) => setName(e.target.value)}
        />

        <button className={styles.button}>
          <span>Criar</span>
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </>
  );
}
