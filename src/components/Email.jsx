const Email = () => {
  // Строка с email-адресом для примера
  const email = "alexei@gmail.com";

  // Простой регэксп на соответствие формату email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Проверяем строку
  const check = emailRegex.test(email);

  // Если проверка прошла — возвращаем текст (он будет отрендерен как текст)
  // Иначе — возвращаем null (ничего не отрисуется)
  return check ? email : null;
};

export default Email;
