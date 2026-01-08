import React, { useState, useEffect, useRef } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [startCountUp, setStartCountUp] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current; 
        if (!node) return;
    
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCountUp(true);
                }
            },
            { threshold: 0.5 }
        );
    
        observer.observe(node);
    
        return () => {
            observer.unobserve(node);
        };
    }, []);
    

    useEffect(() => {
        if (!startCountUp) return;

        let start = 0;
        const increment = end / (duration / 10);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                start = end;
            }
            setCount(Math.round(start));
        }, 10);

        return () => clearInterval(timer);
    }, [end, duration, startCountUp]);

    return <span ref={ref}>{count}</span>;
};

export default CountUp;
