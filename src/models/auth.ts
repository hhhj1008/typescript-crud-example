import { UserDto } from "../dto/user/user.dto";
import { User } from "../entites/user.entity";
import { dataSource } from "../typeormconfig";

export class AuthDao {
  private myDataSource = dataSource.getRepository(User);

  async createUser(login_id: string, password: string) {
    const user = this.myDataSource.create({
      login_id: login_id,
      password: password,
    });

    try {
      await this.myDataSource.save(user);
      return 1;
    } catch (error) {
      return 0;
    }
  }

  async selectUserByLoginId(login_id: string) {
    const user = await this.myDataSource.findOneBy({ login_id: login_id });

    if (!user) return 0;

    return user;
  }
}
