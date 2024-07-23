import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/post-list-store'



function App() {
  const [selectedHtml, setSelectedHtml] = useState("home")

  return (
    <PostListProvider>
      <div className='app-container'>
        <SideBar selectedHtml={selectedHtml} setSelectedHtml={setSelectedHtml}></SideBar>
        <div className='content'>
          <Header></Header>
          {selectedHtml === 'home' ?<PostList></PostList> :  <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
