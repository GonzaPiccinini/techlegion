import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.LoaderContainer}>
            <span className={styles.Loader} />
        </div>
    )
}

export default Loader