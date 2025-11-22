import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeTextCSS({code}) {

    return (
        <SyntaxHighlighter language="css" style={oneDark}>
        {code}
        </SyntaxHighlighter>
    )
}
