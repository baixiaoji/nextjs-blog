import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {
    const posts = await connection.manager.find(Post);
    if (posts.length === 0) {
        await connection.manager.save([2,3,4,5,6,7,8,9, 10, 11].map(n => {
            return new Post({
                title: `Post ${n}`,
                content: `我的第${n}篇博客`
            })
        }));
    }
    await connection.close();
}).catch(error => console.log(error));
