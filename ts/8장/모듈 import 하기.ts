// 전부 import
import * as m from "./모듈 export 하기";
console.log(m.add(5, 5));

import { ver, author } from "./모듈 export 하기";
console.log(ver, author);

import { IProfile, save } from "./모듈 export 하기";
const profile: IProfile = { name: "" };
console.log(save(profile, "JangHoseung"));