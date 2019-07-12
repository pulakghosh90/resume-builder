import React from 'react';

export default function DynamicElement({ as = 'div', hAlign, vAlign, debug, autoRows, autoColumns, ...props }) {
    const Tag = as;
    return <Tag {...props} />;
}
