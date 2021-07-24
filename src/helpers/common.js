const KEY_TOKEN = "REACT_JS";
let jwt = require("jsonwebtoken");



function saveTokenToLocalStorage(token) {
  localStorage.setItem("Token_Login", token);
}
function removeToken(key) {
  localStorage.removeItem(key);
  window.location.href = "/";
}

function decryptToken() {
  let token = getTokenLocalStorage();
  let decode = {};
  if (token !== null && token !== "") {
    decode = jwt.verify(token, KEY_TOKEN);
  }
  return decode
}
function getInfo(){
    let info =decryptToken()    
    // {}
    //   { id: 1, fullname: "Hiep Titus", address: "Da Nang" },
    if (info.hasOwnProperty("id")) {
        return true;
      }
      return false;
}

function getTokenLocalStorage() {
  let token = localStorage.getItem("Token_Login");
  return token;
}

// save password 
function savePasswordToLocal() {
  let infoLogin = localStorage.setItem("Status", getTokenLocalStorage());
  return infoLogin;
}
function getPasswordToLocal() {
  let token = localStorage.getItem("Status");
  return token;
}
function removePasswordTocal() {
  localStorage.removeItem("Status");
}
function getPasswordLogin()
{
  let token_remberPassword = getPasswordToLocal();
  let decodes = null;
  if(token_remberPassword !==null && token_remberPassword !== "")
  {
    decodes = jwt.verify(token_remberPassword, KEY_TOKEN);
  }
  return decodes;
}

export const helpers = {
  saveTokenToLocalStorage,
  getTokenLocalStorage,
  decryptToken,
  getInfo,
  removeToken,
  savePasswordToLocal,
  getPasswordToLocal,
  removePasswordTocal,
  getPasswordLogin
};
