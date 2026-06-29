import React, { useState, useContext, createContext, ReactNode } from 'react';
import { followUser, unfollowUser, fetchCurrentUser } from '@/lib/appwrite/api';

// Define the types for UserContext
interface IUser {
  id: string;
  name: string;
  username: string;
  bio: string;
  imageUrl: string;
  followers: string[];
  following: string[];
  posts: string[];
}

interface IUserContext {
  currentUser: IUser | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
}

// Create the UserContext with default values
const UserContext = createContext<IUserContext | undefined>(undefined);

const normalizeUser = (user: any): IUser | null => {
  if (!user) return null;

  return {
    id: user.$id || user.id || "",
    name: user.name || "",
    username: user.username || "",
    bio: user.bio || "",
    imageUrl: user.imageUrl || "",
    followers: user.followers ?? [],
    following: user.following ?? [],
    posts: user.posts ?? [],
  };
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const follow = async (userId: string) => {
    if (currentUser) {
      await followUser(currentUser.id, userId);
      const updatedUser = await fetchCurrentUser(currentUser.id);
      setCurrentUser(normalizeUser(updatedUser));
    }
  };

  const unfollow = async (userId: string) => {
    if (currentUser) {
      await unfollowUser(currentUser.id, userId);
      const updatedUser = await fetchCurrentUser(currentUser.id);
      setCurrentUser(normalizeUser(updatedUser));
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, follow, unfollow }}>
      {children}
    </UserContext.Provider>
  );
};
