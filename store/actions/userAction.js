const fetching = () => {
  return {
    type: "fetching",
  };
};
const fetched = (users) => {
  return {
    type: "fetched",
    payload: users,
  };
};
export { fetching, fetched };
