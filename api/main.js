const mainAPI = {
  get: async (url, cb) => {
    const response = await fetch(url);
    const data = await response.json();
    cb(data);
  }
}

export default mainAPI;
