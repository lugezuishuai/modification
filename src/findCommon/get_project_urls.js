import fs from 'fs';

export default function getUrl(fileList, regExp, rule) {
    const urls = [];
    fileList.forEach((file) => {
        try {
            const data = fs.readFileSync(file, 'utf-8');
            if(regExp.test(data)) {
                data.match(regExp).forEach((url) => {
                    urls.push(rule(url));
                })
            }
        } catch(err) {
            console.log('Error: ', err);
        }
    })

    return urls;
}