import React from 'react';

const EventCard = ({ imageSrc, title, link = '#' }) => {
    return (
        <a href={link} className="event-card">
            <img src={imageSrc} alt={title} />
            <div className="event-card-content">{title}</div>
        </a>
    );
};

export default EventCard;
