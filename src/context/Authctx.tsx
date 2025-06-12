import React, {
  createContext,
  useContext,
  useState,
} from "react";

type authType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const AuthCtx = createContext<null | authType>(null);

export const AuthCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const value = {
    loading,
    setLoading,
  };
  return (
    <AuthCtx.Provider value={value}>
      {children}
    </AuthCtx.Provider>
  );
};

export const useAuthCtx = (): authType => {
  const ctx = useContext(AuthCtx);
  if (!ctx) {
    throw new Error("ssjs");
  }
  return ctx;
};
