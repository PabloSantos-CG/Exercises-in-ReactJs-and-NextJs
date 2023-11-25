import { useQuery } from "@tanstack/react-query";
import { getPosts, getUser, getUsers } from "../utils/api";

export const useUsers = (enabled?: boolean) =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    enabled,
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
