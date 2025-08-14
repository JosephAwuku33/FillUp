import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";

import { Session, User } from "@supabase/supabase-js";

import { supabase } from "@/config/supabase";

type AuthState = {
  initialized: boolean;
  session: Session | null;
  signUp: (email: string, password: string) => Promise<User | null>;
  signIn: (email: string, password: string) => Promise<User | null>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthState>({
  initialized: false,
  session: null,
  signUp: async () => null,
  signIn: async () => null,
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [initialized, setInitialized] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Error signing up:", error);
      throw error; // allow caller to handle it
    }

    if (!data.user) {
      console.warn("No user returned from sign up");
      return null;
    }

    // Optional: if session is returned, set it in state
    if (data.session) {
      setSession(data.session);
    }

    return data.user; // return user so caller can use user.id
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error signing in:", error);
      throw error; // Let caller handle it like in signUp
    }

    if (!data.user) {
      console.warn("No user returned from sign in");
      return null;
    }

    if (data.session) {
      setSession(data.session);
    }

    return data.user;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
      return;
    } else {
      console.log("User signed out");
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    setInitialized(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        initialized,
        session,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
