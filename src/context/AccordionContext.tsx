import { createContext, useState } from "react";

interface AccordianContextType {
  selectedIndex: number | null;
  toggleAccordian: (index: number) => void;
}

export const AccordianContext = createContext<AccordianContextType>({
  selectedIndex: null,
  toggleAccordian: (index: number) => {},
});

export const AccordianProvider = ({ children }: { children: React.ReactNode }) => {
  // 현재 열려있는 아코디언 메뉴 인덱스
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  // 아이템 인덱스를 전달 받아 해당 아이템 메뉴 토글 적용
  const toggleAccordian = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordianContext.Provider value={{ selectedIndex, toggleAccordian }}>
      {children}
    </AccordianContext.Provider>
  );
};
