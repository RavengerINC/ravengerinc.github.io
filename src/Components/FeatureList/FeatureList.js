import React from 'react';
import FeaturePreview from '../FeaturePreview/FeaturePreview';
import data from '../../data.json';
import './FeatureList.css';

function FeatureList() {
    const featured = ["UCA","UTH","TTG","END","RR1","CF1"]
    const selection = data.filter(item => featured.includes(item.project))
    selection.sort((a, b) => featured.indexOf(a.project) - featured.indexOf(b.project))
    const spaces = selection.map(({ id, project, title, position, preview }) => {
        return (
            <FeaturePreview
                id={id}
                key={project}
                title={title}
                position={position}
                preview={preview}
            />
        )
    })

    return (
        <div className="FeatureList">
            {spaces}
        </div>
    )
}

export default FeatureList