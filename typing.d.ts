export interface User {
  name: string | null | undefined;
  image: string | null | undefined;
  userId: string | null | undefined;
  setUser: (user: User) => void;
  email: string;
}
