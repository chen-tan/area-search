import { getProvinces } from "@/util/areaSearch"

getProvinces().then(ps=>{
    console.log(ps);
    let provinceList=document.getElementsByClassName("province-list")[0];
    let provinceStr='';
    for (const p of ps) {
        let str=`<li><a href="detail.html?name=${p.areaName}&id=${p.id}">${p.simpleName}</a></li>`;
        provinceStr+=str;
    }
    provinceList.innerHTML=provinceStr;
})