import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import Editor from "../Editor";
import {Navigate} from "react-router-dom";
export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    return (
        <form >
            <input type="title"
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <input type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
            />
            <input type="file"
                onChange={ev => setFiles(ev.target.files)}
            />
            <Editor value={content} onChange={setContent}/>
            <button style={{ marginTop: '5px' }}>Create post</button>
        </form>
    )
}