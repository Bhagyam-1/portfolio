import React, { useEffect } from 'react';

const AnimatedText = ({ text }: { text: string }) => {
    useEffect(() => {
        // Create or update a style tag with dynamic delay classes
        let styleTag = document.getElementById('dynamic-delays');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'dynamic-delays';
            document.head.appendChild(styleTag);
        }
        // Build CSS for each character based on the text length
        let styles = '';
        for (let i = 0; i < text.length; i++) {
            styles += `.delay-${i} { animation-delay: ${i * 0.1}s; }\n`;
        }
        styleTag.innerHTML = styles;

        console.log(text.length);
        console.log(styleTag);
    }, [text]);

    return (
        // <div>
        //     {text.split('').map((char, index) => (
        //         <span
        //             key={index}
        //             className="inline-block animate-fadeIn"
        //             style={{ animationDelay: `${index * 0.1}s` }}
        //         >
        //             {char}
        //         </span>
        //     ))}
        // </div>

        // <div className="animated-text">
        //     <p className="text1">Text animation 1</p>
        //     <p className="text2">Text animation 2</p>
        //     <p className="text3">Text animation 3</p>
        // </div>
        <></>
    );
};

export default AnimatedText;
