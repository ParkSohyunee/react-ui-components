import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

import { fruits } from "mock-datas/data";
import styles from "./SelectButton.module.css";

interface SelectMenuProps {
  isOpen: boolean;
}

function SelectMenu({ isOpen }: SelectMenuProps) {
  return (
    <ul className={classNames(styles.container, isOpen ? styles.visible : "")}>
      {["Fruits", ...fruits].map((fruit) => (
        <li key={fruit} className={styles.item}>
          {fruit}
        </li>
      ))}
    </ul>
  );
}

export default function SelectButton() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // 셀렉트 메뉴 이외의 공간 클릭 감지
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
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
        <span>Select a fruit</span>
        <img className={styles.icon} src="/icon/arrow_up.svg" alt="메뉴 보기" />
      </button>
      <SelectMenu isOpen={isOpen} />
    </div>
  );
}
