import {Background} from '@/components/Bg'
import Start from '@/components/Home'
import './globals.css'
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background interactive={true} />
      <Start />
    </main>
  );
}
