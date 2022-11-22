import { UserDto } from "../dto/user/user.dto";
import { AuthDao } from "../models/auth";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export class AuthService {
  authDao: AuthDao = new AuthDao();

  async signUp(data: UserDto) {
    const hash_password = await bcrypt.hash(data.password, 10);

    const result = await this.authDao.createUser(data.login_id, hash_password);

    return result;
  }

  async login(data: UserDto) {
    const user = await this.authDao.selectUserByLoginId(data.login_id);

    if (user == 0) return user;

    const password_check = await bcrypt.compare(data.password, user.password);

    if (password_check) {
      const token = jwt.sign({ user_id: user.id }, "secretKey");

      return token;
    } else {
      return 0;
    }
  }
}
