const ERROR_CODES = {
  EMAIL_NOT_FOUND: "Пользователя с такой почтой не существует!",
  INVALID_LOGIN_CREDENTIALS:
    "Нет записи о пользователе, соответствующей этим данным. Возможно, пользователь был удален или пароль неверен.",
};

export function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : "Неизвестная ошибка";
}
