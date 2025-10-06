import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Ошибка получения данных из LocalStorage", error);
    }
  };

  const [storedValue, setStoredValue] = useState(getStoredValue);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Ошибка добавления данных в LocalStorage", error);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      storedValue(initialValue);
    } catch (error) {
      console.error("Ошибка удаления данных в LocalStorage", error);
    }
  };

  useEffect(() => {
    setStoredValue(getStoredValue());
  }, [key]);

  return [storedValue, setValue, removeValue];
};
