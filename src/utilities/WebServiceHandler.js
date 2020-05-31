/**
 * @description This function is used to make API calls
 */

const callRemoteMethodAsync = async (url, method = "GET", setLoader) => {
  try {
    let response = await fetch(url, method);
    let jsonRes = await response.json();
    return jsonRes;
  } catch (e) {
    alert("Error occurred: " + e.message);
  }
};

const callRemoteMethod = (url, method = "GET", callbackFunc, setLoader) => {
  return fetch(url, method)
    .then(response => response.json())
    .then(jsonResponse => callbackFunc(jsonResponse))
    .catch(e => alert("Error occurred" + e.message));
};

export { callRemoteMethodAsync, callRemoteMethod };