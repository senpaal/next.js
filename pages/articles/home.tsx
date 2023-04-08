import styles from '@/styles/style.module.css'
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}>Home</h1>
            <p className={styles.text}>This is my work using `node.js`</p>
            <Link href="about" className={styles.goAbout}>Click on me!</Link>
        </div>
    )
}
