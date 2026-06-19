import { createContext, useContext, useState, type ReactNode } from "react";

export interface BuyerProfile {
  id: string;
  companyName: string;
  email: string;
  location: string;
  woodNeeded: string[];
  quantity: string;
  budget: string;
  whatsapp: string;
  description: string;
  avatar: string;
  isPremium: boolean;
  createdAt: string;
}

interface BuyerContextType {
  buyerProfile: BuyerProfile | null;
  isBuyerAuthenticated: boolean;
  isBuyerPremium: boolean;
  saveProfile: (data: Omit<BuyerProfile, "id" | "avatar" | "isPremium" | "createdAt">) => void;
  loginBuyer: (email: string, name: string) => void;
  logoutBuyer: () => void;
  upgradeToBuyerPremium: () => void;
}

const BuyerContext = createContext<BuyerContextType | undefined>(undefined);

export function BuyerProvider({ children }: { children: ReactNode }) {
  const [buyerProfile, setBuyerProfile] = useState<BuyerProfile | null>(() => {
    const saved = localStorage.getItem("kayuprima_buyer_profile");
    return saved ? JSON.parse(saved) : null;
  });

  const loginBuyer = (email: string, name: string) => {
    const existingProfile = localStorage.getItem("kayuprima_buyer_profile");
    if (existingProfile) {
      const parsed = JSON.parse(existingProfile);
      setBuyerProfile(parsed);
    } else {
      // Create minimal profile, will be completed in profile page
      const newProfile: BuyerProfile = {
        id: Date.now().toString(),
        companyName: name,
        email,
        location: "",
        woodNeeded: [],
        quantity: "",
        budget: "",
        whatsapp: "",
        description: "",
        avatar: `https://ui-avatars.com/api/?name=${name.replace(/\s/g, "+")}&background=2F5E2F&color=fff`,
        isPremium: false,
        createdAt: new Date().toISOString(),
      };
      setBuyerProfile(newProfile);
      localStorage.setItem("kayuprima_buyer_profile", JSON.stringify(newProfile));
    }
  };

  const logoutBuyer = () => {
    setBuyerProfile(null);
    localStorage.removeItem("kayuprima_buyer_profile");
  };

  const saveProfile = (data: Omit<BuyerProfile, "id" | "avatar" | "isPremium" | "createdAt">) => {
    const updated: BuyerProfile = {
      ...buyerProfile!,
      ...data,
      avatar: `https://ui-avatars.com/api/?name=${data.companyName.replace(/\s/g, "+")}&background=2F5E2F&color=fff`,
    };
    setBuyerProfile(updated);
    localStorage.setItem("kayuprima_buyer_profile", JSON.stringify(updated));
  };

  const upgradeToBuyerPremium = () => {
    if (buyerProfile) {
      const updated = { ...buyerProfile, isPremium: true };
      setBuyerProfile(updated);
      localStorage.setItem("kayuprima_buyer_profile", JSON.stringify(updated));
    }
  };

  return (
    <BuyerContext.Provider
      value={{
        buyerProfile,
        isBuyerAuthenticated: !!buyerProfile,
        isBuyerPremium: buyerProfile?.isPremium || false,
        saveProfile,
        loginBuyer,
        logoutBuyer,
        upgradeToBuyerPremium,
      }}
    >
      {children}
    </BuyerContext.Provider>
  );
}

export function useBuyer() {
  const context = useContext(BuyerContext);
  if (context === undefined) {
    throw new Error("useBuyer must be used within a BuyerProvider");
  }
  return context;
}
