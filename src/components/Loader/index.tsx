import styles from "./Loader.module.scss";

const Loader = ({ isComponent = true }: { isComponent?: boolean }) => {
  return (
    <div className={isComponent ? styles.component_loading : ""}>
      <div className={styles.loading}>Loading&#8230;</div>
    </div>
  );
};

export default Loader;