
import { type User, type CompleteUser } from "@/lib/db/schema/users";
import { OptimisticAction } from "@/lib/utils";
import { useOptimistic } from "react";

export type TAddOptimistic = (action: OptimisticAction<User>) => void;

export const useOptimisticUsers = (
  users: CompleteUser[],
  
) => {
  const [optimisticUsers, addOptimisticUser] = useOptimistic(
    users,
    (
      currentState: CompleteUser[],
      action: OptimisticAction<User>,
    ): CompleteUser[] => {
      const { data } = action;

      

      const optimisticUser = {
        ...data,
        
        id: "optimistic",
      };

      switch (action.action) {
        case "create":
          return currentState.length === 0
            ? [optimisticUser]
            : [...currentState, optimisticUser];
        case "update":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, ...optimisticUser } : item,
          );
        case "delete":
          return currentState.map((item) =>
            item.id === data.id ? { ...item, id: "delete" } : item,
          );
        default:
          return currentState;
      }
    },
  );

  return { addOptimisticUser, optimisticUsers };
};
