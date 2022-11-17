export default function authHeader() {
  const token_id = JSON.parse(localStorage.getItem("token_id"));

  if (token_id) {
    return { Authorization: "Bearer " + token_id };
  } else {
    return {};
  }
}
