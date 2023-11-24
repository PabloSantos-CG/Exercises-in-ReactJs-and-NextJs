import { useQuery } from "@tanstack/react-query";
import { getPosts, getUser, getUsers } from "./api";

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: Infinity
  });

export const useUser = (id: number) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
