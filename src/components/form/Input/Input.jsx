import styles from './Inputs.module.css'

export default function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label
                htmlFor={name} >{text}:</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                id={name}
                onChange={handleOnChange}
            />
        </div>
    )
}