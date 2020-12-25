import fs from 'fs';
import { Path } from '../config/path.js';
const { FilePath } = Path;

export default function createHashMap(path) {
    let hashMap = new Map();
    try {
        const data = fs.readFileSync(path, 'utf-8');
        data.split(`\n`).forEach(item => {
            let arr = item.split(' ').map(str => str.trim()).filter(str => str.trim());
            hashMap.set(arr[0], arr[1]);
        })
    } catch(err) {
        console.log('Error: ', err);
    }

    return hashMap;
}

console.log(createHashMap(FilePath));