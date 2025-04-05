import { useEffect, useState } from 'react';

export default function ButtonToUp() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 1500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed lg:bottom-34 md:bottom-36 bottom-20 right-5 rounded-full w-12 h-12 bg-mainBrown text-white shadow-lg transition-opacity duration-300 animate-fade-in"
                >
                    <i className="fa-solid fa-arrow-up animate-bounce"></i>
                </button>
            )}
        </>
    );
}
