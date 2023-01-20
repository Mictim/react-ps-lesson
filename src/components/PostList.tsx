import { IPostItem, IPostList } from "../models";
import PostItem from "./PostItem";

interface PostListProps {
    posts: IPostItem[];
    title: string;
    remove: (post: IPostItem) => void
}


const PostList = ({ posts, title, remove }: PostListProps) => {

    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>There is no any post here!</h1>
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {posts.map((post: IPostItem, index: number) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;