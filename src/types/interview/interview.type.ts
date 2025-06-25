import { Response } from "../util/response";

export type InterviewType = "Tech" | "Person";

export interface CreateInterviewResponse extends Response {
  data: {
    question: string;
    chat_id: string;
  };
}

export interface InterviewResponse extends Response {
  data: {
    feedback: string;
    question: string;
    chat_id: string;
  };
}
