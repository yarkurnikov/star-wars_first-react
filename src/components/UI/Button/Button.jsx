import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Button.module.css';

const Button = ({ 
    text, 
    onClick, 
    disabled,
    theme='dark',
    classes 
}) => {
     return (
        <button 
            onClick={onClick}
            disabled={disabled} 
            className={cn(styles.btn, styles[theme], classes)}
        >
            {text}
        </button> 
     )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string,
}

export default Button;