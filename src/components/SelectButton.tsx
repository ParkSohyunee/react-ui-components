import styles from "./SelectButton.module.css";

export default function SelectButton() {
  return (
    <button className={styles.button}>
      <span>Select a fruit</span>
      <img className={styles.icon} src="/icon/arrow_up.svg" alt="메뉴 보기" />
    </button>
  );
}
