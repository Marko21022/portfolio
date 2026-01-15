// components/Api.tsx
import StartClient from './StartClient';

export type UserData = {
  avatar: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  displayName: string;
};

export default async function Api() {
  // Fetch server-side to avoid CORS
  const res = await fetch(
    'https://api.marko21022.com/api/6066973443a8f7b63b37d08a66a130bd53df829f0efc6c535350e7fdd1380baf/1143806923754438777',
    { cache: 'no-store' }
  );
  const data = await res.json();

  const user: UserData = {
    avatar: data.avatar,
    status: data.status,
    displayName: data.displayName,
  };

  // Pass the fetched data to the client component
  return <StartClient user={user} />;
}
