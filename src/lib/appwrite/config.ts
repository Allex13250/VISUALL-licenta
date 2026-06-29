import { Client, Account, Databases, Storage, Avatars } from "appwrite";

const appwriteUrl = (import.meta.env.VITE_APPWRITE_URL as string | undefined)?.trim() || "https://cloud.appwrite.io/v1";
const appwriteProjectId = (import.meta.env.VITE_APPWRITE_PROJECT_ID as string | undefined)?.trim() || "6654a8090027ace9a4ff";

export const appwriteConfig = {
  url: appwriteUrl,
  projectId: appwriteProjectId,
  databaseId: (import.meta.env.VITE_APPWRITE_DATABASE_ID as string | undefined)?.trim() || "",
  storageId: (import.meta.env.VITE_APPWRITE_STORAGE_ID as string | undefined)?.trim() || "",
  userCollectionId: (import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID as string | undefined)?.trim() || "",
  postCollectionId: (import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID as string | undefined)?.trim() || "",
  savesCollectionId: (import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID as string | undefined)?.trim() || "",
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
