import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeStyle({ code, language = 'cpp', style = tomorrow }) {
    return (
        <div style={{ maxWidth: '100%'}}>
            <SyntaxHighlighter language={language} style={style}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeStyle