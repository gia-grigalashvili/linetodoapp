import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markImportant } from "../service/Todo";

export const useToggleimportant = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ taskId, updatedTask }) =>
      markImportant({ taskId, updatedTask }),
    onSuccess: () => {
      queryClient.invalidateQueries(["todo"]);
    },
    onError: (error) => {
      console.error("Error important todo:", error.message);
    },
  });
};
