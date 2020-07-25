import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

const Example = ({}) => {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	
	const config = {
        "showWordsCounter": false,
        "showXPathInStatusbar": false,
        "buttons": "bold,strikethrough,underline,italic,eraser,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,font,fontsize,brush,paragraph,|,image,video,table,link,|,align,undo,redo,\n,selectall,cut,copy,paste,copyformat,|,hr,symbol,fullsize,print"
      }
	
	return (
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		        tabIndex={1} // tabIndex of textarea
		        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {console.log(newContent)}}
            />
        );
}
export default Example;