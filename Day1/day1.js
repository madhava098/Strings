function f1(){
    const OriginalS=document.getElementById("string").value
    let reve=" "
    for(let i=OriginalS.length-1;i>=0;i--){
        reve+=OriginalS[i];
    }
    document.getElementById("f2").textContent=reve
}