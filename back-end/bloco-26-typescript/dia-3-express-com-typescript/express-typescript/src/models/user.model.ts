import IUser from "../interfaces/user.iterface";
import connection from "./connection";

const getAll = async (): Promise<IUser[]> => {
  const [rows] = await connection.execute(
    'SELECT * FROM users',
  );
  return rows as IUser[];
}

export default {
  getAll,
};