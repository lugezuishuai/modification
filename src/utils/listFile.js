import path from 'path';
import fs from 'fs';

//递归获取项目中的所有文件路径
export default function listFile(dir, list=[]) {
    let arr = fs.readdirSync(dir);
    arr.forEach((item) => {
        let fullpath = path.join(dir, item);
        let stats = fs.statSync(fullpath);
        if(stats.isDirectory()) {
            listFile(fullpath, list);
        } else {
            list.push(fullpath);
        }
    });

    return list;
}