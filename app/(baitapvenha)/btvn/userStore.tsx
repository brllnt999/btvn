import { User } from '@/lib/db/schema/users';
import { create } from 'zustand'

type UserStore = {
  user: User,
  setUser: (input:User) => void,
 
 
}

export const useUserStore = create<UserStore>((set) => ({
  user: {} as User,
  setUser: (input:User) => set({user:input}),
  
}));

