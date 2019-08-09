import React from 'react';
import './App.css';

// React Draft WYSIWYG + HTML To DraftJS for directly opening HTML:
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';


// Pulled into a function to make this easier. Based on example from docs at:
// https://github.com/jpuri/html-to-draftjs
const htmlToDraftBlocks = (html) => {
  const blocksFromHtml = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};


function App() {

  // Using html-to-draftjs, per documented examples at
  //  https://github.com/jpuri/html-to-draftjs
  // and
  //  https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
  const HTML_WITHOUT_FIGURE = '<p><strong>this seems safe to load</strong></p>';
  const HTML_WITH_FIGURE = '<p><figure></figure><strong>this seems safe to load</strong></p>';

  // Let's set `editorState` based on either the content with
  // or without HTML. Change the variable below and refresh the page
  // to see the result!
  const editorState = htmlToDraftBlocks(HTML_WITH_FIGURE);

  return (
    <div className="App">

      <Editor
        defaultEditorState={editorState}
      />

    </div>
  );
}

export default App;
