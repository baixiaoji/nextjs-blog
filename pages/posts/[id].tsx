import React from "react";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {getPost, getPostsIdList} from "libs/posts";


type Props = {
    post: Post;
}
const showPost: NextPage<Props> = (props) => {
    const {post} = props;
    return (
        <div>
            <h1>文章详情</h1>
            <h2>{post.title}</h2>
            <article dangerouslySetInnerHTML={ {__html: post.htmlContent}}>
            </article>
        </div>
    )
}

export default showPost;

export const getStaticPaths: GetStaticPaths = async () => {
    const idList = await getPostsIdList();

    return {
        paths: idList.map(id => ({
            params: {id}
        })),
        fallback: false,
    }
}

export const getStaticProps:GetStaticProps = async (staticContext: any) => {
    const id = staticContext.params.id;
    const post = await getPost(id);
    return {
        props: {
            post,
        }
    }
}
