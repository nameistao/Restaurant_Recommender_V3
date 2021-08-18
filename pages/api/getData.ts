import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const lat = req.query.lat;
  const long = req.query.long;

  const config = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}`,
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const response = await axios(config);

  const data = response.data;

  res.status(200).json({ data: data });
};
