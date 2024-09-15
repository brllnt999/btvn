import { text, sqliteTable } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { type getUsers } from "@/lib/api/users/queries";

import { nanoid } from "@/lib/utils";
import { sql } from "drizzle-orm";


export const users = sqliteTable('users', {
  id: text("id").primaryKey().$defaultFn(() => nanoid()),
  name: text("name"),
  email: text("email"),
  selected: text("selected",{mode:"json"}).notNull().default(sql`(json_array())`),
  results: text("results",{mode:"json"}).notNull(),
  kindeId:text("kinde_id"),
  picture:text("picture"),
  userId: text("user_id").notNull()
});


// Schema for users - used to validate API requests
const baseSchema = createSelectSchema(users)

export const insertUserSchema = createInsertSchema(users);
export const insertUserParams = baseSchema.extend({}).omit({ 
  id: true,
  userId: true
});

export const updateUserSchema = baseSchema;
export const updateUserParams = baseSchema.extend({}).omit({ 
  userId: true
});
export const userIdSchema = baseSchema.pick({ id: true });

// Types for users - used to type API request params and within Components
export type User = typeof users.$inferSelect;
export type NewUser = z.infer<typeof insertUserSchema>;
export type NewUserParams = z.infer<typeof insertUserParams>;
export type UpdateUserParams = z.infer<typeof updateUserParams>;
export type UserId = z.infer<typeof userIdSchema>["id"];
    
// this type infers the return from getUsers() - meaning it will include any joins
export type CompleteUser = Awaited<ReturnType<typeof getUsers>>["users"][number];

