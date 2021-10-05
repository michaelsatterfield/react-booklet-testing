import React from 'react';
import section1 from "../images/section1.png";
import { Parallax} from "react-scroll-parallax";


const styles = {
    background: {
        backgroundImage: `url(${section1})`,
        height: '100vh',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

    },

    content: {
        position: 'relative',
        color: 'white',
        fontSize: '40px',
        // top: 600

    }
}


const SectionOne = () => {
    return (
        <Parallax>
        <div style={styles.background}>
            <div  style={styles.content}>
                Covid Report
            </div>
        </div>
        </Parallax>
    );
};

export default SectionOne;



