import { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import { IPostItem } from './models';
import './styles/App.css';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'good' },
    { id: 2, title: 'TS', body: 'very good' },
    { id: 3, title: 'Java', body: 'oops' },
  ])
  //Contolled component
  // const[title, setTitle] = useState('');
  // const[body, setBody] = useState('');

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visible, setVisible] = useState(false);

  const sortedPosts: IPostItem[] = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    switch (filter.sort) {
      case "title": return sortedPosts.filter(post => post.title.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()));
      case "body": return sortedPosts.filter(post => post.body.toLocaleLowerCase().includes(filter.query.toLocaleLowerCase()));
      default: return sortedPosts;
    }
  }, [filter.query, sortedPosts])

  const createPost = (newPost: IPostItem) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  const removePost = (post: IPostItem) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '30px'}} onClick={() => setVisible(true)}>Add Post</MyButton>
      <MyModal visible={visible}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='JS List' />

    </div>
  )
}

export default App
