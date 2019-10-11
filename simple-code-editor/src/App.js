import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import './prism.css';

const entry = `//type here`;
function App() {
    const [code, setCode] = useState(entry)
    return (
        <div className="App" style={{height:'600px', marginTop:'30px'}}>
            <Editor
                value={code}
                onValueChange={entry => setCode(entry)}
                highlight={entry => highlight(entry, languages.jsx)}
                padding={10}
                className="container__editor"
            />
        </div>
    );
}

export default App;