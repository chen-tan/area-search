import { getCities } from "../util/areaSearch"
import queryString from "query-string"

const parsed=queryString.parse(location.search);
let title=document.getElementsByTagName("h1")[0];
let dl=document.getElementsByTagName("dl")[0];
title.innerText=parsed.name;
getCities(parsed.id).then(cs=>{
    console.log(cs);
    let cityStr='';
    for (const c of cs) {
        let str=`<dd>${c.simpleName}</dd>`;
        cityStr+=str;
    }
    dl.innerHTML=cityStr;
})
let btn=document.getElementsByTagName("button")[0];
btn.addEventListener("click",()=>{
    location.href="list.html";
})