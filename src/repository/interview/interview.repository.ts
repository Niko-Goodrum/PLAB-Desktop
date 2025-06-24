import { PlabAxios } from "@/libs/axios/customAxios.js";
import { CreateInterviewParams, InterviewParams } from "./interview.param";
import {
  CreateInterviewResponse,
  InterviewResponse,
} from "@/types/interview/interview.type";

class InterviewRepository {
  public async postCreateInterview(
    params: CreateInterviewParams
  ): Promise<CreateInterviewResponse> {
    const { data } = await PlabAxios.post("/interview/create", params);
    return data;
  }

  public async postInterview(params: InterviewParams): Promise<InterviewResponse> {
    const { data } = await PlabAxios.post("/interview", params);
    return data;
  }
}

const interviewRepository = new InterviewRepository();
export default interviewRepository;
