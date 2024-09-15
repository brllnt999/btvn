import { db } from "@/lib/db/index";
import { eq, and } from "drizzle-orm";
import { getUserAuth } from "@/lib/auth/utils";
import { type UserId, userIdSchema, users } from "@/lib/db/schema/users";
import { deleteUser } from "./mutations";

export const getUsers = async () => {
  const { session } = await getUserAuth();
  const sessionId = session?.user.id as string
  const rows = await db.select().from(users).where(eq(users.userId, sessionId));
  const u = rows
  return { users: u };
};

export const getUserById = async (id: UserId) => {
  const { session } = await getUserAuth();
  const sessionId = session?.user.id as string
  const { id: userId } = userIdSchema.parse({ id });
  const [row] = await db.select().from(users).where(and(eq(users.id, userId), eq(users.userId,sessionId)));
  if (row === undefined) return {};
  const u = row;
  return { user: u };
};

export const getAllUsers = async () => {
  const rows = await db.select().from(users);
  const u = rows
  return { allUsers: u };
};

export const getUserByKindeId = async (id: string) => {
  const duplicate = await db.select().from(users).where(eq(users.kindeId,id))
  console.log(duplicate.slice(1))
  for (const user of duplicate.slice(1)) {
    if (user.kindeId === id) { await deleteUser(user.id)}
  }
  const [row] = await db.select().from(users).where(and(eq(users.userId, id)));
  if (row === undefined) return {};
  const u = row;
  return { user: u };
};
