import { fruits } from "mock-datas/data";
import styles from "./SelectButton.module.css";

function SelectMenu() {
  return (
    <ul className={styles.container}>
      {["Fruits", ...fruits].map((fruit) => (
        <li key={fruit} className={styles.item}>
          {fruit}
        </li>
      ))}
    </ul>
  );
}

export default function SelectButton() {
  return (
    <div>
      <button className={styles.button}>
        <span>Select a fruit</span>
        <img className={styles.icon} src="/icon/arrow_up.svg" alt="메뉴 보기" />
      </button>
      <SelectMenu />
    </div>
  );
}
