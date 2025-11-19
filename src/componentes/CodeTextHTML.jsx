import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeTextHTML({code}) {

    return (
        <SyntaxHighlighter language="html" style={oneDark}>
        {code}
        </SyntaxHighlighter>
    )
}
