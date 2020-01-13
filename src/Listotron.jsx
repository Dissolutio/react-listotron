import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    listItems: PropTypes.array.isRequired,
    styles: PropTypes.object
}

const defaultProps = {
    styles: {
        ul: {
            fontFamily: 'Comic Sans MS',
            color: 'green'
        },
        li: {
            background: '#BaDa55',
            border: '1px solid blue'
        }
    }
}

const Listotron = (props) => {
    const { listItems } = props
    const styles = props.styles || {};
    return (
        <ul style={styles.label}>
            <h1>Listotron</h1>
            {listItems.map(item => (
                <li style={styles.li}>
                    {item.name}
                </li>
            ))}
        </ul>
    )
}


Listotron.propTypes = propTypes;
Listotron.defaultProps = defaultProps;

export default Listotron