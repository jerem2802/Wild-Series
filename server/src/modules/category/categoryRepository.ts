import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Category = {
  id: number;
  title: string;
  user_id: number;
};

class CategoryRepository {
  // The C of CRUD - Create operation

  async create(category: Omit<Category, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into item (title, user_id) values (?, ?)",
      [category.title, category.user_id],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from category where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Category;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from category");

    // Return the array of items
    return rows as Category[];
  }
}

export default new CategoryRepository();
