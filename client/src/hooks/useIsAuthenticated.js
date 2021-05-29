import { useLocalStorage } from "./useLocalStorage";

export function useIsAuthenticated() {
  const [isAuthenticated] = useLocalStorage("isAuthenticated");

  return !!isAuthenticated;
}
