// import node module libraries
import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';

const ReactQuillEditor = (props) => {
	const { initialValue } = props;
	const { quill, quillRef } = useQuill();
	useEffect(() => {
		if (quill) {
			quill.clipboard.dangerouslyPasteHTML(initialValue);
			quill.on('text-change', (delta, oldDelta, source) => {
				console.log('Text change event!');
				/* -------------------------------
				possible return values and methods
				----------------------------------
				console.log(quill.getText()); // Get text only
				console.log(quill.getContents()); // Get delta contents
				console.log(quill.root.innerHTML); // Get innerHTML using quill
				console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef */
			});
		}
	}, [quill]);

	return (
		<div style={{ width: 'auto', height: 'auto' }}>
			<div ref={quillRef} />
		</div>
	)
};

export default ReactQuillEditor;
