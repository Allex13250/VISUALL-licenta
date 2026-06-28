# VISUALL

VISUALL is a modern social media-style web app built with React, TypeScript, Vite, Tailwind CSS, and Appwrite. It supports authentication, profile management, post creation, liking, saving, exploring users, and a responsive layout for desktop and mobile.

## Features

- User sign up and sign in
- Protected routes and authentication state
- Create, edit, and view posts
- Like and save posts
- Explore users and profiles
- Responsive UI with Tailwind CSS
- Real-time data storage via Appwrite

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- React Query
- Appwrite
- React Router

## Project Structure

- src/_auth: authentication pages and forms
- src/_root: main app pages and layout
- src/components: reusable UI and shared components
- src/context: auth and user context providers
- src/lib: Appwrite API layer, query hooks, validation, and utilities

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

The app will be available at http://localhost:5173/.

### 3. Build for production

```bash
npm run build
```

## Environment Variables

The project already includes a local `.env` file with Appwrite configuration values. If needed, update them in the root `.env` file.

## Clerk Skills Setup

To install the Clerk-related skills for this workspace, run:

```bash
npx skills add clerk/skills
```

## Notes

- The app uses Appwrite for authentication and database storage.
- If sign-up or sign-in fails, verify the Appwrite project configuration in the `.env` file.
- For a production deployment, make sure your Appwrite collections and permissions are configured correctly.

