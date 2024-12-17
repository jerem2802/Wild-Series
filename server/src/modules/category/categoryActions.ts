import categoryRepository from "./categoryRepository";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];
import type { RequestHandler } from "express";

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((p) => p.id === parsedId);
  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};
const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();

  res.json(categoriesFromDB);
};
// Declare the actions

/* Here you code */

// Export them to import them somewhere else

export default { browse, read };
/* Here you export */
