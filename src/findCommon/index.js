import { Path } from '../config/path.js';
import { Rule } from '../config/rule.js';
import { regExp } from '../config/regExp.js';
import getInvalidUrls from './get_file_urls.js';
import getUrl from './get_project_urls.js';
import listFile from '../utils/listFile.js';
const { FilePath, ProjectPath } = Path;
const { FileRule, ProjectRule } = Rule;
const { FileRegExp, ProjectRegExp } = regExp;

const invalidUrls = getInvalidUrls(FilePath, FileRegExp, FileRule);
const docUrls = getUrl(listFile(ProjectPath), ProjectRegExp, ProjectRule);
const commonUrls = docUrls.filter(url => invalidUrls.includes(url));
console.log(commonUrls);