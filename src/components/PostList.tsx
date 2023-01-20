import { IPostItem } from "../models";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FC } from "react";

type PostListProps = {
    posts: IPostItem[];
    title: string;
    remove: (post: IPostItem) => void
}

const PostList: FC<PostListProps> = ({ posts, title, remove }) => {

    if (!posts.length) {
        return <h1 style={{ textAlign: "center" }}>There is no any post here!</h1>
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post: IPostItem, index: number) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>

        </div>
    )
}

export default PostList;