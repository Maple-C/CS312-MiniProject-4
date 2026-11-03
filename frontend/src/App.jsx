import SignIn from "./components/SignIn" ;
import SignUp from "./components/SignUp" ;
import BlogPostForm from "./components/BlogPostForm" ;
import PostList from "./components/PostList";
import './styles.css' ;

function App() {
  return (
    <>
      <SignIn />

    <hr />

      <SignUp />

    <hr />

      <BlogPostForm />

    <hr />

    <PostList />
    

    </>
  );
}

export default App;