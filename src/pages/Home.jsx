import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home(){
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if (posts) {
                setPosts(posts)
            }
        })
    }, [])
    if (posts.length === 0) {
        return <div className="w-full py-8 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl hover:text-gray-300 font-bold ">Login to read posts</h1>
                    </div>
                </div>
            </Container>
        </div>
    }return(
        <div className="w-full py-8">
            {posts.map((post)=>(
                <div key={post.$id} className="p-2 w-1/4">
                    <PostCard {...post} />
                </div>
            ))}
        </div>
    )
}

export default Home;