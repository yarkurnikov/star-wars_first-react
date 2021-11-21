import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Video.module.css';
import { useEffect, useRef } from 'react';

const Video = ({
    src,
    playbackRate=1.0,
    classes,
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, []);

     return (
        <video
            loop
            autoPlay
            muted 
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src} />
        </video>
     )
}

Video.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.number,
    classes: PropTypes.string,
}

export default Video;