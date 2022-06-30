import { undefined_user } from "./../lib/data";
import create from "zustand";

import { devtools, persist } from "zustand/middleware";
import { User } from "../typing";

export const useUserStore = create<any>()(
  devtools(
    persist((set) => ({
      user: null,
      setUser: (user: User) => set((state: Object) => ({ user })),
    }))
  )
);
