import { API_BASE_URL } from "./paths";

class Api {
  static request(
    path,
    params = {
      method: "GET",
    }
  ) {
    return fetch(`${API_BASE_URL}/${path}`, params).then((response) =>
      response.json()
    );
  }
  static get(path) {
    return Api.request(path);
  }

  static patch(path, id, body) {
    return Api.request(`${path}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
}

export default Api;
