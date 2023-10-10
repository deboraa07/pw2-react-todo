import { ITechnology } from "../../App";
import { Technology } from "../Technology";
import styles from "./technologies.module.css";

interface IProps {
  technologies: ITechnology[];
  onDelete: (id: string) => void;
  onChecked: (id: string) => void;
}

export function Technologies({ onChecked, onDelete, technologies }: IProps) {
  const technologiesNumber = technologies.length;
  const checkedTechnologies = technologies.filter(
    (technology) => technology.isChecked
  ).length;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <p>Tecnologias criadas</p>
          <span className={styles.countTechnologies}>
            {technologiesNumber}
          </span>
        </div>
        <div>
          <p className={styles.purpleText}>Concluidas</p>
          <span className={styles.countTechnologies}>{checkedTechnologies} de {technologiesNumber}
          </span>
        </div>
      </header>

      <div className={styles.all}>
        {technologies.map((technology: ITechnology) => (
          <Technology
            onChecked={onChecked}
            onDelete={onDelete}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
}
