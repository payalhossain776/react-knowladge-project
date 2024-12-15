
import './App.css'
import Blogs from './componenet/blogs/Blogs'
import Bookmark from './componenet/BookesMark/Bookmark'
import Header from './componenet/header/Header'

function App() {
 

  return (
    <>
    <Header></Header> 
    <div className='md:flex'>
    <Blogs></Blogs>
    <Bookmark></Bookmark>
    </div>
    
    </>
  )
}

export default App
