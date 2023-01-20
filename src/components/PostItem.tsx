import { FC } from "react";
import { IPostItem } from "../models"
import MyButton from "./UI/button/MyButton";

type PostItemProps = {
  number: number;
  post: IPostItem;
  remove: (post: IPostItem) => void;
}

const PostItem: FC<PostItemProps> = ({ number, post, remove }) => {

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className='post__btn'>
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>

    </div>
  )
}

export default PostItem;