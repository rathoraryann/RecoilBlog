import React, { useEffect, useState } from "react";
import {PostCard, Container} from '../components'
import service from '../appwrite/config'


function AllPosts(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        service.getPost([]).then((posts)=>{
            if(posts){
                setPosts(posts)
            }
        })        
    }, [])
    return(
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                        <div className="p-2 w-1/4" key={post.$id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts;