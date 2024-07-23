import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import service from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(Object.values(posts.documents))
            }
        })
    }, [])
    
  return (
    <div className='w-full py-8'>
        <Container>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mx-5 ">
                {posts.map((post) => (
                    <div key={post.$id}>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts