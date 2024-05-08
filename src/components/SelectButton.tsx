import { Dispatch, MouseEvent, SetStateAction, useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { fruits } from "mock-datas/data";
import styles from "./SelectButton.module.css";

interface SelectMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const DEFAULT_VALUE = "Fruits";

function SelectMenu({ isOpen, setIsOpen, selected, setSelected }: SelectMenuProps) {
  const handleSelectItem = (e: MouseEvent<HTMLUListElement>) => {
    // 메뉴가 열려있고, list를 선택했으면 selected를 그 id로 변경
    if (isOpen && e.currentTarget !== e.target) {
      setSelected((e.target as HTMLLIElement).id);
      setIsOpen(false);
    }
  };

  return (
    <ul
      className={classNames(styles.container, isOpen ? styles.visible : "")}
      onClick={handleSelectItem}
    >
      {[DEFAULT_VALUE, ...fruits].map((fruit) => (
        <li key={fruit} className={styles.item} id={fruit}>
          {fruit}
        </li>
      ))}
    </ul>
  );
}

export default function SelectButton() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // 셀렉트 메뉴 이외의 공간 클릭 감지
  useEffect(() => {
    const onClick = (e: Event) => {
      if (ref.current !== null && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.addEventListener("click", onClick);
    };
  }, [isOpen]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <button onClick={toggleModal} className={styles.button}>
        <span>{selected ? selected : "Select a fruit"}</span>
        <img className={styles.icon} src="/icon/arrow_up.svg" alt="메뉴 보기" />
      </button>
      <SelectMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}
