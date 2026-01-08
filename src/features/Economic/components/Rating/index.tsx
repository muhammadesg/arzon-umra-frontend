import React from "react";
import styles from "./Rating.module.scss";

interface Props {
    initialRating: number;
}

const Rating = ({ initialRating }: Props) => {
    return (
        <div className={styles.rating} data-rating={initialRating} data-aos="fade-up">
            <p>{initialRating}</p>
            {[5, 4, 3, 2, 1].map((value) => (
                <span
                    key={value}
                    className={`${styles.star} ${value <= initialRating ? styles.active : ""}`}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;