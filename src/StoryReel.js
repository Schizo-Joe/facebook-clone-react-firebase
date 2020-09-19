import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://cdn140.picsart.com/327464379069201.jpg?type=webp&to=crop&r=256"
                profileSrc="https://cdn131.picsart.com/323779276307201.jpg?type=webp&to=crop&r=256"
                title="Natalia" />

            <Story image="https://cdn131.picsart.com/315934060092201.jpg?type=webp&to=crop&r=256"
                profileSrc="https://cdn131.picsart.com/323038550298201.jpg?type=webp&to=crop&r=256"
                title="Aleksandar" />

            <Story image="https://cdn141.picsart.com/325429489094201.jpg?type=webp&to=crop&r=256"
                profileSrc="https://cdn131.picsart.com/325488229053201.jpg?type=webp&to=crop&r=256"
                title="Veronika" />

            <Story image="https://i.pinimg.com/originals/de/64/80/de64801f0275c1ab2ea5a9e2bb3ce7bc.jpg"
                profileSrc="https://cdn140.picsart.com/263784829018202.png?type=webp&to=min&r=640"
                title="Ivana" />

            <Story image="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/75238076/original/d274960485df2a5b8b3e9960c2c9dda01eb8237d/ask-20-random-strangers-to-choose-your-best-profile-picture.jpg"
                profileSrc="https://www.archiefoundationhome.org.uk/wp-content/uploads/2020/05/profile-photo-social-media.jpg"
                title="Petar" />

        </div>
    )
}

export default StoryReel
