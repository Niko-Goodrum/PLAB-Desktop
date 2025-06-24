import { InterviewType } from "@/types/interview/interview.type";

export interface CreateInterviewParams {
  type: InterviewType;
}

export interface InterviewParams {
  answer: string;
  chat_id: string;
}
