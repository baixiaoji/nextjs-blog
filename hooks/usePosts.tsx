import {useEffect, useState} from "react";
import axios from "axios";

type Post = {
    id: string;
    title: string;
    date:string;
}

const usePosts = () => {
    const [isLoading, setLoading] = useState(false);
    const [isEmpty, setEmpty] = useState(false);
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        setLoading(true);
        axios.get('/api/v1/posts').then(response => {
            setPosts(response.data);
            if (!response.data.length) {
                setEmpty(true)
            }
            setLoading(false)
        }, () => {
            setLoading(false)
        })
    }, []);

    return {
        isLoading, setLoading,
        isEmpty, setEmpty,
        posts, setPosts,
    }
}
export default usePosts;
