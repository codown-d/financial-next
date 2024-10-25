// pages/api/mockData.js
import mockData from "../../mock";

export default function handler(req, res) {
  res.status(200).json(mockData);
}
