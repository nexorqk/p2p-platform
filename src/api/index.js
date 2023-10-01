class RestClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(url, headers = {}) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "GET",
      headers,
    });
    return response.json();
  }

  async post(url, data, headers = {}) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async put(url, data, headers = {}) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async delete(url, headers = {}) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      headers,
    });
    return response.json();
  }
}
