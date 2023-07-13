import { data } from "./drinks";

export default function handler(req, res) {
  res.status(200).json(data);
}
