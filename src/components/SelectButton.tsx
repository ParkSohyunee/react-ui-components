import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from "react";
import classNames from "classnames";

import { fruits } from "mock-datas/data";
import styles from "./SelectButton.module.css";
import { useDetectClose } from "hooks/useDetectClose";

interface SelectMenuProps {
  isOpen: boolean;
  toggleHandler: () => void;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const DEFAULT_VALUE = "Fruits";

function SelectMenu({ isOpen, toggleHandler, selected, setSelected }: SelectMenuProps) {
  const handleSelectItem = (e: MouseEvent<HTMLUListElement>) => {
    const id = (e.target as HTMLLIElement).id;

    // 메뉴가 열려있고, id가 있고, list를 선택했으면 selected를 그 id로 변경
    if (isOpen && e.currentTarget !== e.target && id) {
      toggleHandler();
      setSelected(id);
    }
  };

  return (
    <ul
      className={classNames(styles.container, isOpen ? styles.visible : "")}
      onClick={handleSelectItem}
    >
      <li className={styles.default}>{DEFAULT_VALUE}</li>
      {fruits.map((fruit) => (
        <li key={fruit} className={styles.item} id={fruit}>
          {fruit === selected ? (
            <img src="/icon/check.svg" alt="선택한 메뉴" className={styles.check} />
          ) : (
            <span className={styles.check}></span>
          )}
          {fruit}
        </li>
      ))}
    </ul>
  );
}

export default function SelectButton() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState("");
  const { ref: currentRef, isOpen, toggleHandler } = useDetectClose({ ref });

  return (
    <div ref={currentRef} className={styles.wrapper}>
      <button onClick={toggleHandler} className={styles.button}>
        <span>{selected ? selected : "Select a fruit"}</span>
        <img className={styles.icon} src="/icon/arrow_up.svg" alt="메뉴 보기" />
      </button>
      <SelectMenu
        isOpen={isOpen}
        toggleHandler={toggleHandler}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}
