import styles from './SubmitButton.module.css'

export default function SubmitButton({ text }) {
    return (
        <div className={styles.btnControl}>
            <button className={styles.btn} >{text}</button>
        </div>
    )
}