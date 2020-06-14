import path from "path";
import fs, {promises as fsPromise} from "fs";
import matter from "gray-matter";

export const getPosts = async () => {
    const blogDir = path.join(process.cwd(), 'markdown');
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
