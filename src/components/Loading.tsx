import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            {/*Here, spinning is executed in CSS.*/}
            <div className='loader'></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loading;