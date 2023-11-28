import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPosts, getUser, getUsers } from "../utils/api";

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

export const useUser = (id: number) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });

export const usePosts = (limit:number, start:number) =>
  useQuery({
    queryKey: ["posts", { limit, start }],
    queryFn:() => getPosts(limit, start),
    placeholderData: keepPreviousData
  });