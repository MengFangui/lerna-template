// 引入dayjs
import dayjs from 'dayjs'
// 引入lodash
import * as _ from "lodash";
console.log(_.padStart("Hello TypeScript!", 20, " "),'===lodash示例===')
console.log(dayjs().format(),'===dayjs示例===')
function greeter(person:string) {
    return "Hello, " + person;
}
export default greeter