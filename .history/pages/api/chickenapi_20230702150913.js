import { data } from "./chicken";

export default function handler(req, res) {
  res.status(200).json(data);
}
