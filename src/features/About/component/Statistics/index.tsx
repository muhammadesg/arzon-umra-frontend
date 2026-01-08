import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Statistics.module.scss";
import CountUp from "../CountUp";
import { AboutsInterface } from "@/features/Home/Types";

interface Props {
    data: AboutsInterface;
}

const Statistics = ({ data }: Props) => {
    const [startCountUp, setStartCountUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("statistics-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    setStartCountUp(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const statisticsList = [
        {
            title: "Hamkorlar",
            count: data?.brand,
        },
        {
            title: "Mehmonxonalar",
            count: data?.hotel,
        },
        {
            title: "Baxtli ziyoratchilar",
            count: data?.customer,
        },
        {
            title: "Obunachilar",
            count: data?.follower,
        },
    ];

    return (
        <div className="container">
            <div id="statistics-section" className={`${styles.statistics}`}>
                {statisticsList.map((el, i) => {
                    // const duration = i >= 2 ? 1000 : 2000; // Faster for 3rd & 4th

                    return (
                        <motion.div
                            key={i}
                            className={styles.statistics_box}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <motion.div
                                className={styles.statistics_top_item}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                <CountUp end={el.count} startCountUp={startCountUp} />+
                            </motion.div>
                            <motion.div
                                className={styles.statistics_bottom_item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.3 }}
                            >
                                <p>{el.title}</p>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Statistics;
