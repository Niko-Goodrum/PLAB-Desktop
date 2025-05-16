import { useMutation } from "@tanstack/vue-query";
import { SignupParams, SigninParams, RefreshParams } from "@/repository/auth/auth.param";
import authRepository from "@/repository/auth/auth.repository";

export const usePostSignup = () => {
  const mutation = useMutation({
    mutationFn: (params: SignupParams) => {
      return authRepository.postSignup(params);
    },
  });

  return mutation;
};

export const usePostSignin = () => {
  const mutation = useMutation({
    mutationFn: (params: SigninParams) => {
      return authRepository.postSignin(params);
    },
  });

  return mutation;
};

export const usePostRefreshToken = () => {
  const mutation = useMutation({
    mutationFn: (params: RefreshParams) => {
      return authRepository.postRefreshToken(params);
    },
  });

  return mutation;
};
