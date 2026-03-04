import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Author } from '@/data/mockData';

interface AuthContextType {
  user: Author | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const mockUser: Author = {
  id: '1',
  name: 'Sarah Mitchell',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  bio: 'Senior technology analyst covering AI, blockchain, and emerging tech trends.',
  role: 'admin',
  articlesCount: 142,
  followers: 24500,
  twitter: '@sarahmitchell',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Author | null>(null);

  const login = (_email: string, _password: string) => {
    setUser(mockUser);
  };

  const register = (_name: string, _email: string, _password: string) => {
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
