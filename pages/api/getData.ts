import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const lat = "37.767413217936834";
  const long = "-122.42820739746094";

  const config = {
    method: "get",
    url: `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}`,
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  const response = await axios(config);

  const data = JSON.stringify(response.data);

  res.status(200).json({ data: data });
};
