import { UserChatsResponse } from "@/types/user/user.type";
import { useQuery, UseQueryOptions } from "@tanstack/vue-query";
import { AxiosError } from "axios";
import { QUERY_KEY } from "../queryKey.js";
import userRepository from "@/repository/user/user.repository.js";

export const useGetUserChats = (
  options?: UseQueryOptions<
    UserChatsResponse,
    AxiosError,
    UserChatsResponse,
    UserChatsResponse,
    readonly [string]
  >
) =>
  useQuery({
    queryKey: [QUERY_KEY.user.getUserChats] as const,
    queryFn: () => userRepository.getUserChats(),
    ...{ staleTime: 1000 * 60 * 60, cacheTime: 1000 * 60 * 60, ...options },
  });
