import {GetStaticProps, NextPage} from "next";
import React from "react";
import usePosts from "libs/hooks/usePosts";
import {getPosts} from "../../libs/posts";


type Props = {
    posts: Post[];
}
const PostsIndex: NextPage<Props> = (props) => {
    const {posts} = props;
    return (
        <div>
            <h1>博客列表</h1>
            {
                posts.map(p => <div key={p.id}>{p.id}</div>)
            }
        </div>
    )
}

export default PostsIndex;

// getStaticProps SSG 静态化   动态内容静态化
export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts()

    return {
        props: {
            // 核心  页面中存在一个script标签中包含props数据
            posts: JSON.parse(JSON.stringify(posts)),
        }
    }
}
