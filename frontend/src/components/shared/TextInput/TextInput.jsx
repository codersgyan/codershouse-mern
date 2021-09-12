import React from 'react';
import styles from './TextInput.module.css';

const TextInput = (props) => {
    return (
        <div>
            <input
                className={styles.input}
                style={{
                    width: props.fullwidth === 'true' ? '100%' : 'inherit',
                }}
                type="text"
                {...props}
            />
        </div>
    );
};

export default TextInput;
