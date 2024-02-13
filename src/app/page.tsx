import Image from 'next/image';
import styles from './page.module.css';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>テスト</div>
      <Button>テスト</Button>
      <Calendar />
    </main>
  );
}
