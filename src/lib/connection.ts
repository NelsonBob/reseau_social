import { createPool, Pool } from "mysql2/promise";

export const connect = async (): Promise<Pool> => {
  const connection = await createPool({
    host: `${process.env.host}`,
    user: `${process.env.userDb}`,
    password: `${process.env.passwordDb}`,
    database: `${process.env.DB_DATABASE}`,
    connectionLimit: 10,
  });

  return connection;
};
