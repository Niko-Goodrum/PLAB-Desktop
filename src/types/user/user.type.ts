import { InterviewType } from "../interview/interview.type";
import { Response } from "../util/response";

export interface UserChatsType {
  id: string;
  user_id: string;
  type: InterviewType;
  last_question: string;
}

export interface UserChatsResponse extends Response {
  data: UserChatsType[];
}
