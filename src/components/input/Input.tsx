import styles from "./Input.module.css";

const Input = (props: { label: string; onChange: any }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.label}</label>
      <input className={styles.input} onChange={props.onChange} />
    </div>
  );
};

export default Input;
