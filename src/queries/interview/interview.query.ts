import { CreateInterviewParams } from "@/repository/interview/interview.param";
import { InterviewParams } from "@/repository/interview/interview.param.js";
import interviewRepository from "@/repository/interview/interview.repository.js";
import { CreateInterviewResponse } from "@/types/interview/interview.type";
import { InterviewResponse } from "@/types/interview/interview.type.js";
import { useMutation } from "@tanstack/vue-query";
import { AxiosError } from "axios";

export const usePostCreateInterview = () => {
  const mutation = useMutation<
    CreateInterviewResponse,
    AxiosError,
    CreateInterviewParams
  >({
    mutationFn: (params: CreateInterviewParams) => {
      return interviewRepository.postCreateInterview(params);
    },
  });

  return mutation;
};

export const usePostInterview = () => {
  const mutation = useMutation<InterviewResponse, AxiosError, InterviewParams>({
    mutationFn: (params: InterviewParams) => {
      return interviewRepository.postInterview(params);
    },
  });

  return mutation;
};
