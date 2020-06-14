import {NextPage} from "next";
import React from "react";
import usePosts from "../../hooks/usePosts";



const PostsIndex: NextPage = () => {
    const {isLoading, isEmpty, posts} = usePosts();
    return (
        <div>
            <h1>博客列表</h1>
            {
                isLoading ? <div>加载中</div> :
                    isEmpty ? <div>没有博客</div> :
                    posts.map(p => <div key={p.id}>{p.id}</div>)
            }
        </div>
    )
}

export default PostsIndex;
