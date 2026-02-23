import React from 'react';
import './DemoReel.css';

export default function DemoReel() {
    return (
        <div className="demo-reel-container">
            <iframe
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/8KT9egsN1yo?si=eQF4GEigb8zGSpk8"
                title="Demo Reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}