import create from "zustand";

import { devtools, persist } from "zustand/middleware";
import { User } from "../typing";

export const useUserStore = create<User>()(
  devtools(
    persist((set) => ({
      name: "",
      image: "",
      userId: "",
      email: "",
      setUser: (user: User) => set(() => user),
    }))
  )
);
