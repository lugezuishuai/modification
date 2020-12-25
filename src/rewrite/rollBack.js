import createHashMap from './hashMap.js';
import fs from 'fs';
import  { Path } from '../config/path.js';
import { regExp } from '../config/regExp.js';
import { Rule } from '../config/rule.js';
import listFile from '../utils/listFile.js';
import getKeyByValue from '../utils/getKeyByValue.js';

const { FilePath, ProjectPath } = Path;
const { ProjectRegExp } = regExp;
const { ProjectRule } = Rule;
const hashMap = createHashMap(FilePath);

function rollBack(fileList) {
    let code = 0;
    fileList.forEach((file) => {
        try {
            let data = fs.readFileSync(file, 'utf-8');
            if(ProjectRegExp.test(data)) {
                data.match(ProjectRegExp).forEach((url) => {
                    url = ProjectRule(url);
                    let newUrl = getKeyByValue(hashMap, url);
                    if(newUrl !== undefined) {
                        data = data.replace(url, newUrl);
                        fs.writeFileSync(file, data);
                    }
                })
            }
        } catch(err) {
            code = 1;
            console.log('Error: ', err);
        }
    })
    code === 0 && console.log('回滚成功');
}

rollBack(listFile(ProjectPath));