import React, { useState } from 'react'
import { IPostItem } from '../models';
import MyButton from './UI/button/MyButton'
import { MyInput } from './UI/input/MyInput'

interface PostFormProps {
    create: (post: IPostItem) => void;
}

const PostForm = ({create}: PostFormProps) => {
    const [post, setPost] = useState<{ title: string, body: string }>({ title: '', body: '' });

    const addNewPost = async (event: React.FormEvent) => {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        };
        create(newPost);
        setPost({ title: '', body: '' });
    }
    return (
        <form>
            {/*Controlled component */}
            <MyInput value={post.title} onChange={(event: any) => setPost({ ...post, title: event.target.value })}
                type="text" placeholder="post title..." />
            <MyInput value={post.body} onChange={(event: any) => setPost({ ...post, body: event.target.value })}
                type="text" placeholder="post description..." />
            <MyButton onClick={addNewPost}>Create post</MyButton>
            <MyButton onClick={() => { setPost({ title: '', body: '' }) }}>Clear content</MyButton>
        </form>
    )
}

export default PostForm
