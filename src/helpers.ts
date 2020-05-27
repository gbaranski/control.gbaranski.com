import { requestTypes } from "./types";

export async function fetchUrl(queryString: string, headers: Headers) {
  const url = "https://control.gbaranski.com" + queryString;
  console.log(url);
  const response = await fetch(url, {
    method: "POST",
    headers,
  }).catch((error) => {
    alert(error);
    return;
  });
  return response;
}

export async function getRemoteData(requestType: requestTypes) {
  const response = await fetch(`https://control.gbaranski.com${requestType}`, {
    method: "POST",
  });
  return response.json();
}
