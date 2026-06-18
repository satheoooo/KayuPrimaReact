import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: "google" | "email";
}

interface AuthContextType {
  user: User | null;
  isPremium: boolean;
  login: (userData: User) => void;
  logout: () => void;
  upgradeToPremium: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("kayuprima_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isPremium, setIsPremium] = useState<boolean>(() => {
    return localStorage.getItem("kayuprima_premium") === "true";
  });

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("kayuprima_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsPremium(false);
    localStorage.removeItem("kayuprima_user");
    localStorage.removeItem("kayuprima_premium");
  };

  const upgradeToPremium = () => {
    setIsPremium(true);
    localStorage.setItem("kayuprima_premium", "true");
  };

  return (
    <AuthContext.Provider value={{ user, isPremium, login, logout, upgradeToPremium, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
