import useSWR from "swr";

import { UserType } from "@/types/common/user";
import { urls } from "@/utils/constants/urls";

import { fetcher } from "./fetcher";

export const useFetchUsers = (params?: string) => {
  const { data, isLoading, error, isValidating, mutate } = useSWR<UserType[]>(
    `${urls.USERS}?${params || ""}`,
    fetcher
  );

  return {
    data: data || null,
    isLoading,
    isValidating,
    error,
    mutate,
  };
};
