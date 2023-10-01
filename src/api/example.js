const api = new RestClient("https://example.com/api");

api.get("/data").then((data) => {
  console.log("GET запрос:", data);
});

api.post("/data", { key: "value" }).then((data) => {
  console.log("POST запрос:", data);
});

api.put("/data/1", { key: "new value" }).then((data) => {
  console.log("PUT запрос:", data);
});

api.delete("/data/1").then((data) => {
  console.log("DELETE запрос:", data);
});
