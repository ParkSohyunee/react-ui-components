import { useContext } from "react";
import classNames from "classnames";

import style from "./Accordion.module.css";

import { AccordianContext } from "context/AccordionContext";
import { datas } from "mock-datas/data";

interface AccordianItemProps {
  index: number;
  data: {
    title: string;
    contents: string;
  };
}

function AccordianItem({ index, data }: AccordianItemProps) {
  const { selectedIndex, toggleAccordian } = useContext(AccordianContext);

  const handleTrigger = (index: number) => () => {
    toggleAccordian(index);
  };

  const itemActiveStyle = index === selectedIndex ? style[`item-open`] : "";

  return (
    <li className={classNames(style.item)}>
      <div onClick={handleTrigger(index)} className={style[`item-trigger`]}>
        <h2 className={style.title}>
          {index + 1}
          {`.`} {data.title}
        </h2>
        <img
          src="icon/arrow.svg"
          alt="화살표 버튼"
          width={16}
          height={16}
          className={selectedIndex === index ? style[`arrow-up`] : style.arrow}
        />
      </div>
      <p className={classNames(style[`item-content`], itemActiveStyle)}>
        {data.contents}
      </p>
    </li>
  );
}

export default function AccordionContainer() {
  return (
    <ul className={style.section}>
      {datas.map((data, index) => (
        <AccordianItem key={index} index={index} data={data} />
      ))}
    </ul>
  );
}
