import React from 'react';

export default function DynamicElement({ as = 'div', ...props }) {
    const Tag = as;
    return <Tag {...props} />;
}
