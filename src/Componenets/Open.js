import React from 'react';
import { useLocation } from 'react-router-dom';

const Open = () => {
    const location = useLocation();

    // Function to truncate long content with ellipsis
    const truncateContent = (content, maxLength) => {
        if (content.length > maxLength) {
            return content.substring(0, maxLength) + '...';
        }
        return content;
    };

    return (
        <div className='p-4'>
            <h1 className='text-2xl'>{location.state?.article?.title}</h1>
            <img src={location.state?.article?.urlToImage} className='h-96 w-76' alt='Article Image' />
            <p>{truncateContent(location.state?.article?.content, 200)}</p>
            <a href={location.state?.article?.url} target='_blank' rel='noopener noreferrer'>Read More</a>
        </div>
    );
};

export default Open;
