function f1(){
    const OriginalS=document.getElementById("string").value
    let reve=" "
    for(let i=OriginalS.length-1;i>=0;i--){
        reve+=OriginalS[i];
    }
    document.getElementById("f2").textContent=reve
}

function m1(){
    const Odata=document.getElementById("data").value
    let Cdata=" ";
    for(let i=0;i<Odata.length;i++){
        Cdata+=Odata[i].toUpperCase()
    }
    document.getElementById("answer").value=Cdata
}