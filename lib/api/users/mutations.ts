import { db } from "@/lib/db/index";
import { and, eq } from "drizzle-orm";
import { 
  UserId, 
  NewUserParams,
  UpdateUserParams, 
  updateUserSchema,
  insertUserSchema, 
  users,
  userIdSchema 
} from "@/lib/db/schema/users";
import { getUserAuth } from "@/lib/auth/utils";

export const createUser = async (user: NewUserParams) => {
  const { session } = await getUserAuth();
  
  const newUser = insertUserSchema.parse({ ...user, userId: session?.user.id as string });
  try {
    const [u] =  await db.insert(users).values(newUser).returning();
    return { user: u };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const updateUser = async (id: UserId, user: UpdateUserParams) => {
  const { session } = await getUserAuth();
  const { id: userId } = userIdSchema.parse({ id });
  const newUser = updateUserSchema.parse({ ...user, userId: session?.user.id as string });
  try {
    const [u] =  await db
     .update(users)
     .set(newUser)
     .where(and(eq(users.id, userId!), eq(users.userId, session?.user.id as string)))
     .returning();
    return { user: u };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

export const deleteUser = async (id: UserId) => {
  const { session } = await getUserAuth();
  const { id: userId } = userIdSchema.parse({ id });
  try {
    const [u] =  await db.delete(users).where(and(eq(users.id, userId as string), eq(users.userId, session?.user.id as string)))
    .returning();
    return { user: u };
  } catch (err) {
    const message = (err as Error).message ?? "Error, please try again";
    console.error(message);
    throw { error: message };
  }
};

