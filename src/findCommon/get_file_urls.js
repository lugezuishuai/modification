import fs from 'fs';

export default function getInvalidUrls(path, regExp, rule) {
    try {
        const data = fs.readFileSync(path, 'utf-8');
        if(regExp.test(data)) {
            return data.match(regExp).map(rule);
        }
    } catch(err) {
        console.log('Error: ', err);
    }
}