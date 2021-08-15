/*
 * How to use:
 * 1. Go to https://popcat.click/
 * 2. Press F12
 * 3. Go to "Console" tab
 * 4. Copy and paste this script
 * 5. Press ENTER
 * ps. Credit Legit auto pop by Noxturnix
 */
function getRandomKey(length) {
  var randomChars = "abcdefghijklmnopqrstuvwxyz";
  var result = "";
  for (var i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
}

function sleepRandom() {
  min = 40;
  max = 60;
  return Math.floor(Math.random() * (max - min) + min);
}

function pop() {
  let keyDownEvent = new KeyboardEvent("keydown", { key: getRandomKey(1) });
  document.dispatchEvent(keyDownEvent);
}

async function massPop(pop_count) {
  for (let i = 0; i < pop_count; i++) {
    pop();
  }
}

function clearCookie(cookie_name) {
  let cookies = document.cookie.split(";").map((cookieString) => {
    let cookieArray = cookieString.trim().split("=");
    return {
      name: cookieArray[0] ? cookieArray[0] : "",
      propertyString: cookieArray[1] ? cookieArray[1] : "",
    };
  });
  let filteredCookies = cookies.filter(
    (cookie) =>
      cookie.propertyString && cookie.name.toLowerCase() !== cookie_name
  );
  let cookieStringArray = filteredCookies.map((cookie) =>
    cookie.name.concat("=").concat(cookie.propertyString)
  );
  let cookieString = cookieStringArray.join("; ");
  document.cookie = cookieString;
}

function ResetMaxPops() {
  let vueElement = document.getElementById("app").__vue__;
  vueElement.sequential_max_pops = 0;
}

function popProcess(pop_count, cookie_name) {
  clearCookie(cookie_name);
  ResetMaxPops();
  massPop(pop_count);
}

function start(pop_count, interval = sleepRandom(), cookie_name = "vtwigoujp") {
  popProcess(pop_count, cookie_name);
  setInterval(() => {
    popProcess(pop_count, cookie_name);
  }, interval);
}

start(1);
