import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const Error = ({ img, title }) => {

    const history = useHistory();

    const onClick = () => {

        history.push('/');
    }

    return (
        <div className='error-wrapper'>
            <img alt="error-img" src={img} />
            <h1>{title}</h1>
            <Button
                type='primary'
                onClick={onClick}
            >
                Go home
            </Button>
        </div>
    )
}

export default Error