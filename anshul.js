const comp=document.getElementById('compute')

comp.addEventListener('click',()=>
{
    const w=document.getElementById('weight')
    const h=document.getElementById('height')
    let weight=Number(w.value)
    let height=Number(h.value)
    if(weight<0 || height <0)
        {
            return
        }
    let heightsq=height*height

    let BMI =weight/heightsq

    let result1=document.getElementById('result1')
    result1.innerHTML="Result : "+BMI.toFixed(2)
})

const check =document.getElementById('check')
check.addEventListener('click',()=>
{
    const w=document.getElementById('weight')
    const h=document.getElementById('height')
    let weight=Number(w.value)
    let height=Number(h.value)

    if(weight<0 || height <0)
    {
        return
    }
    let heightsq=height*height

    let BMI =weight/heightsq

    let result
    if(BMI < 18.5)
    {
        result = "UnderWeight"
    }
    else if(BMI >=18.54 && BMI <=24.9)
    {
        result = "Healthy"
    }
    else if(BMI >=25 && BMI <=25.9)
    {
        result = "OverWeight"
    }
    else if (BMI>=30)
    {
        result = "Obese"
    }

    const result2 = document.getElementById('result2')
    result2.innerHTML = "Result : "+result
})