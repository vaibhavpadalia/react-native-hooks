/**
 * @description This function is used to make API calls
 */

const callRemoteMethod = async (ref, url, method) => {
  try {
    let response = await fetch(url, method);
  } catch (e) {
    alert("Error occurred:", e.message);
  }
};