import MySQL from "mysql2";

const CFG = {
  host: "localhost",
  user: "root",
  password: "",
  database: "auth_service"
}

let conn = null;

class Database {
  static async hasConnection() {
    conn = MySQL.createConnection(CFG);
    try {
      await conn.promise().ping()
      await conn.end();

      this.lastConnection = new Date();
      return true;
    } catch (e) {
      return false;
    }
  }

  static async query(sql, args) {
    conn = MySQL.createConnection(CFG);

    try {
      const result = await conn.promise().query(sql, args);

      await conn.end();
      this.lastConnection = new Date();
      return result[0];
    } catch (e) {
      return "ERR-0";
    }
  }
}

export default Database;