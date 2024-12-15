import type { RequestHandler } from "express";

const sayWelcome: RequestHandler = (req, res) => {
  console.info(req.query);
  res.send(`Welcome to the server!"${req.query.name}!`);
};

export default { sayWelcome };
