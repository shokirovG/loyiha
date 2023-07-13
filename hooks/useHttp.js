const useHttp = () => {
  const request = async (
    url,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    const data = await fetch(url, { method, body, headers });
    if (data.ok) {
      return data.json();
    }
  };

  return { request };
};

export default useHttp;
