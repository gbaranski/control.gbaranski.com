import { requestTypes } from "./types";

export async function fetchUrl(queryString: string, headers: Headers) {
  const url = "https://api.gbaranski.com" + queryString;
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  headers.append("username", username || "");
  headers.append("password", password || "");
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
  const headers = new Headers();
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  headers.append("username", username || "");
  headers.append("password", password || "");

  const response = await fetch(`https://api.gbaranski.com${requestType}`, {
    method: "POST",
    headers,
  });
  return response.json();
}
