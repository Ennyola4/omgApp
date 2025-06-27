import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import '../css/write.css';

const Write = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Start typing here...</p>',
    });

    return (
        <div className="write-container">
            <div className='write-overall-container'>
                <header className="write-header">
                    <h1>Create Your Post</h1>
                    <button className='writeButton'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        Add a cover image
                    </button>
                </header>
                
                <input 
                    type="text" 
                    className="write-title" 
                    placeholder='Share your story' 
                />
                
                <div className='write-category-container'>
                    <label>Choose a category:</label>
                    <select name="cat" className='selectOption'>
                        <option value="general">General</option>
                        <option value="sport">Sport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="politics">Politics</option>
                        <option value="bigbrother">Big Brother</option>
                    </select>
                </div>
                
                <textarea 
                    name="des" 
                    className='write-description' 
                    placeholder='A short description about your post...'
                    rows="3"
                />
                
                <div className="editor-wrapper">
                    <EditorContent editor={editor} className='textEditor' />
                </div>
                
                <div className="write-actions">
                    <button className="publish-button">Publish</button>
                    <button className="save-draft-button">Save Draft</button>
                </div>
            </div>
        </div>
    )
}

export default Write;