import styles from './Loading.module.css'
import loading from '../../../Assets/loading.svg'

export default function Loading() {
    return (
        <div className={styles.loaderContainer}>
            <img className={styles.loader} src={loading} alt="Loading" />
        </div>
    )
}