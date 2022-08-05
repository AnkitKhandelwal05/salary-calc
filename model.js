var basicsalary= document.getElementById('salary');
basicsalary=parseInt(basicsalary);
var salary={ hra(basicsalary)
{
    return basicsalary*0.6;
},
  da(basicsalary)
    {
        return basicsalary*0.4;
    },
  
 ma(basicsalary)
    {
        return basicsalary*0.15;
    },
  
 ta(basicsalary)
    {
        return basicsalary*0.1;
    },
 
  pf(basicsalary)
    {
        return basicsalary*0.05;
    },
 
gs( basicsalary)
    {
        return basicsalary + salary.hra(basicsalary)+ salary.da(basicsalary)+ salary.ma(basicsalary)+ salary.ta(basicsalary);
    }, 
  
ns(basicsalary)
{ 
    return basicsalary+ salary.hra(basicsalary)+ salary.da(basicsalary)+ salary.ma(basicsalary)+ salary.ta(basicsalary)- salary.pf(basicsalary);

}

}