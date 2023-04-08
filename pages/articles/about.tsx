import styles from '@/styles/style.module.css'
import { useRouter } from "next/router"

export default function About() {
    const router = useRouter()

    return (
        <div>
            <button onClick={() => router.push('home')} className={styles.backHome}>Home</button>
            <h1 className={styles.title}>About page</h1>
            <p className={styles.text}>This is the about page</p>
        </div>
    )
}