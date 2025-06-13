import React, {
  createContext,
  useContext,
  useState,
} from "react";

type authType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  showAlert: null | String;
  setShowAlert: React.Dispatch<
    React.SetStateAction<null | String>
  >;
};
const AuthCtx = createContext<null | authType>(null);
export const AuthCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState<null | String>(
    null
  );
  const value = {
    loading,
    setLoading,
    showAlert,
    setShowAlert,
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
