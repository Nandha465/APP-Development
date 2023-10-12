import styles from "./BackGroundDescription.module.css";

const BackGroundDescription = () => {
  return (
    <div className={styles.description}>
      <p>
        <span className={styles.webTitle}>Pet's World</span>
        <span className={styles.webSlogan}>
          Illuminate the Pet's World, Creating an Exclusive Toys & Features!
        </span>
      </p>
    </div>
  );
};

export default BackGroundDescription;
