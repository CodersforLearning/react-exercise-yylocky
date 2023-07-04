import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
    // Create a state for the window size
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

  
    // A function that updates the windowSize object with the current window width and height
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        // Add a resize event listener
        window.addEventListener("resize", handleResize);
      
        return () => {
            // Remove the resize event listener
            window.removeEventListener("resize", handleResize);
          
        };
    }, []);

    return (
        <h1>
            {windowSize.width} x {windowSize.height}
        </h1>
    );
};

export default App;
