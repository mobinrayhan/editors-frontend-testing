'use client'

// import node module libraries
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const HighlightCode = ({ code, className = '' }) => {
	const copyAction = (event) => {
		event.target.innerHTML = 'Copied';
		setTimeout(() => {
			event.target.innerHTML = 'Copy';
		}, 3000);
	};
	return (
		<div className='position-relative code-highlight-box'>
			<CopyToClipboard text={code}>
				<button className="copy-button" onClick={copyAction}>
					Copy
				</button>
			</CopyToClipboard>
			<SyntaxHighlighter language="javascript" style={atelierSulphurpoolDark} className={"rounded " + className}>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};
export default HighlightCode;
