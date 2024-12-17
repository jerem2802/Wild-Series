import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  user_id: number;
};

class ProgramRepository {
  async create(program: Omit<Program, "id">) {
    const [result] = await databaseClient.query<Result>(
      "insert into item (title, user_id) values (?, ?)",
      [program.title, program.user_id],
    );

    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from program where id = ?",
      [id],
    );

    return rows[0] as Program;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from program");

    return rows as Program[];
  }
}

export default new ProgramRepository();
