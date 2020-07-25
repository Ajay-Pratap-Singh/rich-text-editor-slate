import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RichTextEditor from './RichTextEditor/RichTextEditor';
import EditorJs from 'react-editor-js';
import Example from './ExampleJodit';
import * as serviceWorker from './serviceWorker';

const passItHere=(value)=>{
  console.log(value);
}

ReactDOM.render(

  <React.StrictMode>
  {/*<EditorJs onChange={(e,d)=>{console.log(d)}}/>;*/}
  <Example/>;
    {/*<RichTextEditor body={'[{"type":"paragraph","children":[{"text":""}]}]'} onChange={passItHere}/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
