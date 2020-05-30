/**
 * @description This function is used to make API calls
 */

const callRemoteMethod = async (url, method = "GET", setLoader) => {
  try {
    let response = await fetch(url, method);
    let jsonRes = await response.json();
    return jsonRes;
  } catch (e) {
    alert("Error occurred:", e.message);
  }
};

export { callRemoteMethod };