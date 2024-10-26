const url = "https://jsonplaceholder.typicode.com";

export const api = async (page, data) => {
  const req = await fetch(`${url}/${page}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await req.json();

  return res;
};