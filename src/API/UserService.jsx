import axios from "axios";

export default class UserService {
  static async getUsers() {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    return result;
  }
}
