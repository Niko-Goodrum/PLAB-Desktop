import { PlabAxios } from "@/libs/axios/customAxios.js";
import { UserChatsResponse } from "@/types/user/user.type";

class UserRepository {
  public async getUserChats(): Promise<UserChatsResponse> {
    const { data } = await PlabAxios.get("/user/chats");
    return data;
  }
}

const userRepository = new UserRepository();
export default userRepository;
