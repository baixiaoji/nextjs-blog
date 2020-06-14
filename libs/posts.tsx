import path from "path";
import fs, {promises as fsPromise} from "fs";
import matter from "gray-matter";
import marked from 'marked';

const blogDir = path.join(process.cwd(), 'markdown');

export const getPosts = async () => {
    const fileNames = await fsPromise.readdir(blogDir);
    return fileNames.map(filename => {
        const fileFullPath = path.join(blogDir, filename);
        const id = filename.replace(/\.md$/, '');
        const fileContent = fs.readFileSync(fileFullPath);
        const {data: {title, date}, content} = matter(fileContent);

        return {
            id, title, date,
        }
    })
}

export const getPost = async (id: string) => {
    const fileFullPath = path.join(blogDir, id + '.md');

    const fileContent = fs.readFileSync(fileFullPath);

    const {data: {title, date}, content} = matter(fileContent);
    const htmlContent = marked(content);
    return JSON.parse(JSON.stringify({
        id, title, date, content,htmlContent
    }));
}

export const getPostsIdList = async () => {
    const fileNames = await fsPromise.readdir(blogDir);
    return fileNames.map(filename => filename.replace(/\.md/, ''));
}
