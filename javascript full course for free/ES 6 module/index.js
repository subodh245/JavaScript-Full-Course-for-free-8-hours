// import { PI, getArea ,getCircumference } from "./math_util";
import * as MathUtil from "./math_util.js";     // this is anather way of calling the function from anather file
                                                //    for using it we have to use (.)
                                                // ex. console.log(MathUtil.PI);

console.log(MathUtil.PI);


let circumference = MathUtil.getCircumference(13);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);