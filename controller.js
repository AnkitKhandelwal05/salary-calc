function compute(){
    var basicsalary= document.getElementById('salary').value;
basicsalary=parseInt(basicsalary);
document.getElementById("hra").innerText=salary.hra(basicsalary);
document.getElementById('da').innerText=salary.da(basicsalary);
document.getElementById('ma').innerText=salary.ma(basicsalary);
document.getElementById('ta').innerText=salary.ta(basicsalary);
document.getElementById('pf').innerText=salary.pf(basicsalary);
document.getElementById('gs').innerText=salary.gs(basicsalary);
document.getElementById('ns').innerText=salary.ns(basicsalary);
console.log("ankit");
}