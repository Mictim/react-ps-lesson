import { useEffect, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import { usePosts } from './hooks/usePosts';
import { IPostItem } from './models';
import './styles/App.css';
import PostService from './api/PostService';
import Loader from './components/UI/loader/Loader';
import { useFetch } from './hooks/useFetch';

function App() {

  const [posts, setPosts] = useState<IPostItem[]>([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visible, setVisible] = useState<boolean>(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.query, filter.sort);

  const [fetchPosts, isLoading, errorMessage] = useFetch(async () => {
    setPosts(await PostService.getAllPosts()); 
  });

  useEffect(() => {
    fetchPosts() ;  
  }, [])

  const createPost = (newPost: IPostItem) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  const removePost = (post: IPostItem) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: '30px' }} onClick={() => setVisible(true)}>Add Post</MyButton>
      <MyModal visible={visible} setVisible={(visible) => setVisible(visible)}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {
        errorMessage.toString() &&
        <h1>{errorMessage.toString()}</h1>
      }
      {
        isLoading
        ? <Loader/>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='JS List' />
      }
      
    </div>
  )
}

export default App
