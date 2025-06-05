export default function NewPost() {

    return (
        <>
            <h2>Create a New Post</h2>
            <button>Post</button>
            <button>Save as Draft</button>
            <button>Cancel</button>
            <div>
                <h3>Title</h3>
                <input type='text' />
            </div>
            <div>
                <h3>Author</h3>
                <p>Edgar Zambrana</p>
            </div>
            <div>
                <h3>Tags</h3>
            </div>
            <div>
                <h3>Post Content</h3>
                <textarea></textarea>
            </div>
        </>
    )
}