import React, { useState, useEffect } from 'react';

function ExpandedWriteup(props) {
    const { project } = props
    const [content, setContent] = useState(null);

    useEffect(() => {
        let mounted = true;
        const url = `${process.env.PUBLIC_URL}/Descriptions/${project}.html`;
        fetch(url)
            .then(res => res.ok ? res.text() : null)
            .then(html => { if (mounted) setContent(html); })
            .catch(() => { if (mounted) setContent(null); });
        return () => { mounted = false; };
    }, [project]);

    if (!content) return null;

    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export default ExpandedWriteup