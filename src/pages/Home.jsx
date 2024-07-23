import React, { useEffect, useState } from "react";
import service from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        service.getPosts([]).then((posts)=>{
            if (posts) {
                setPosts(Object.values(posts.documents))
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
    }return (
        <div className='w-full py-8'>
            <Container>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mx-5 ">
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 '>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home;