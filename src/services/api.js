let jwt = require("jsonwebtoken");
const KEY_TOKEN = "REACT_JS";

function checkLogin(user, password) {
  let token = null;
  if (user === "admin" && password === "123") {
    // ma hoa 
    return (token = jwt.sign(
      { user:user, password: password,  id: 1, fullname: "HiepTitus", address: "Da Nang" },
      KEY_TOKEN
    ));
  }
  return token;
}
export const api = {
  checkLogin,
};
