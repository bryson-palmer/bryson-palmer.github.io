import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition( id ) {
    const [animation, setAnimation] = useState( false );

    useLayoutEffect(() => {
        function updatePosition() {
            // Set offsetHeight equal to where the id element 'header' is in the window document
            const offsetHeight = window.document.getElementById( id ).offsetHeight;
            // If the current Y axis is greater than the height of where the header is,
            // Then set animation to true
            if (window.pageYOffset > offsetHeight * 0.7) {
                setAnimation(true);
            }
        }
        // Event listener for scrolling on Y axis
        window.addEventListener('scroll', updatePosition);
        // Update position on Y axis
        updatePosition();
        // Clean up function for listener
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return animation;
}
