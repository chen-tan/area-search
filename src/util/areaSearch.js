
export async function getProvinces(){
    console.log('执行了');
    return await fetch("/api/local").then(res=>res.json());
}

export async function getCities(parentId){
    return await fetch(`/api/local?parentId=${parentId}`).then(res=>res.json());
}