// src/components/MeasureElement.jsx
import { useLayoutEffect, useState, useRef } from "react";

function MeasureElement() {
  const elementRef = useRef(null);

  // 1) Сразу подберём корректный стартовый цвет по ширине окна,
  //    чтобы первая отрисовка не мигала.
  const initialBg =
    typeof window !== "undefined" && window.innerWidth > 600
      ? "lightgreen"
      : "lightcoral";

  const [width, setWidth] = useState(0);
  const [bg, setBg] = useState(initialBg);

  const measure = () => {
    if (!elementRef.current) return;
    const { width } = elementRef.current.getBoundingClientRect();
    setWidth(width);
    // 2) Синхронно выставляем целевой фон по фактической ширине элемента.
    setBg(width > 600 ? "lightgreen" : "lightcoral");
  };

  useLayoutEffect(() => {
    // 3) Первое измерение — в useLayoutEffect (до отрисовки браузером),
    //    чтобы сразу попасть в верный цвет без "кораллового" кадра.
    measure();

    // 4) Подписка на resize (без CSS-анимации — она и даёт заметный "миг").
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div>
      <div
        ref={elementRef}
        style={{
          border: "1px solid black",
          padding: "10px",
          backgroundColor: bg, // используем вычисленный без мигания цвет
          // transition: "background-color 0.3s ease", // ← УБРАНО: даёт "мигание" при монтировании
        }}
      >
        Измеряемый элемент
      </div>
      <p>Ширина элемента: {Math.round(width)}px</p>
    </div>
  );
}

export default MeasureElement;
