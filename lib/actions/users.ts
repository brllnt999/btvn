"use server";

import { revalidatePath } from "next/cache";
import {
  createUser,
  deleteUser,
  updateUser,
} from "@/lib/api/users/mutations";
import {
  UserId,
  NewUserParams,
  UpdateUserParams,
  userIdSchema,
  insertUserParams,
  updateUserParams,
} from "@/lib/db/schema/users";

const handleErrors = (e: unknown) => {
  const errMsg = "Error, please try again.";
  if (e instanceof Error) return e.message.length > 0 ? e.message : errMsg;
  if (e && typeof e === "object" && "error" in e) {
    const errAsStr = e.error as string;
    return errAsStr.length > 0 ? errAsStr : errMsg;
  }
  return errMsg;
};

const revalidateUsers = () => revalidatePath("/users");

export const createUserAction = async (input: NewUserParams) => {
  try {
    const payload = insertUserParams.parse(input);
    await createUser(payload);
    revalidateUsers();
  } catch (e) {
    return handleErrors(e);
  }
};

export const updateUserAction = async (input: UpdateUserParams) => {
  try {
    const payload = updateUserParams.parse(input);
    await updateUser(payload.id, payload);
    revalidateUsers()
  } catch (e) {
    return handleErrors(e);
  }
};

export const deleteUserAction = async (input: UserId) => {
  try {
    const payload = userIdSchema.parse({ id: input });
    await deleteUser(payload.id);
    revalidateUsers();
  } catch (e) {
    return handleErrors(e);
  }
};