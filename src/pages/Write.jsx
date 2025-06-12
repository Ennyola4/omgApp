import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
 import '../css/write.css'


const Write = () => {

    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Start typing here...</p>',
        
    });
    return (
        <div>
            <div className='write-overall-container'>
                <h1>Create Your Post</h1>
                <button className='writeButton'>Add a cover image</button>
                <input type="text" name="" id="" placeholder='Share your story' />
                <div className='writeCategory'>
                    <label htmlFor="">Choose a category :</label>
                    <select name="cat" id="" className='selectOption'>
                        <option value="general">General</option>
                        <option value="sport">Sport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="politics">Politics</option>
                        <option value="bigbrother">Big Brother</option>
                    </select>
                </div>
                <textarea name="des" id="" placeholder='A short descriptin' className='writeText'></textarea>
                 <EditorContent editor={editor} className='textEditor' />
            </div>
        </div>
    )
}

export default Write
