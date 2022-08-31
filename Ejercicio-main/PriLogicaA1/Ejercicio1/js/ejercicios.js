class Ejercicios1{
    venta(){
      //console.log("venta..")
      let costo = document.getElementById("costo").value
      costo = parseFloat(costo)
      let des = document.getElementById("descuento").value
      des = parseFloat(des)
      let resp = document.getElementById("resp")
      let iva = document.getElementById("iva").checked
      let valorIva = 0,sub=0,tot=0,valordes=0
      const iva12 = 0.12
      valordes = costo*(des/100)
      sub = costo-valordes
      if (iva==true){
        valorIva=sub*iva12
      }
      tot=sub+valorIva
      
      resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${tot.toString()}` 
      console.log(resp.textContent)
      console.log(costo,valordes,valorIva,sub,tot)

    }
}
let ejer1 = new Ejercicios1()
//ejer.venta()

//ejercicio suma de numeros pares
class Ejercicios2{
  algoritmo(){
    let num1 = document.getElementById("num1").value
      num1 = parseFloat(num1)
      let num2 = document.getElementById("num2").value
      num2 = parseFloat(num2)
      let resp = document.getElementById("Respuesta")
    let suma = 0
    
    if (num1 % 2 === 0 && num2 % 2 === 0){
      suma = num1 + num2 
      resp.textContent = `la suma de los numero pares es:${suma.toLocaleString()}`
    } else{
      resp.textContent = `error, los numeros no son pares para poder sumar`
    }
    console.log(resp.textContent)
    console.log(num1, num2)
}
} let ejer2 = new Ejercicios2()
//ejercicio terminado

//ejercicio numero mayor
class Ejercicios3{
  mayor(){
    let num1 = document.getElementById("num1").value
      num1 = parseFloat(num1)
      let num2 = document.getElementById("num2").value
      num2 = parseFloat(num2)
      let resp = document.getElementById("Respuesta")
    let mayor = 0
    if (num1===num2){
    resp.textContent=`son iguales`
    }
    if (num1>num2){
      resp.textContent=`el numero mayor es:${num1.toLocaleString()}`
    }
    if(num2>num1){
      resp.textContent=`el numero mayor es:${num2.toString()}`
    }
    console.log(resp.textContent)
    console.log(num1, num2)
}
}
let ejer3 = new Ejercicios3()
//terminado

// dias de la semana 
class diasem{
  dias(){
    let dia = document.getElementById("dia").value
    dia = parseFloat(dia)
    let resp = document.getElementById("Respuesta")
    if (dia==1){
      resp.textContent= "el dia 1 es lunes "
    }
    if (dia==2){
      resp.textContent="el dia 2 es martes "
    }
    if (dia==3){
      resp.textContent="el dia 3 es miercoles "
    }
    if (dia==4){
      resp.textContent="el dia 4 es jueves"
    }
    if (dia==5){
      resp.textContent="el dia 5 es viernes"
    }
    if (dia==6){
      resp.textContent="el dia 6 es sabado"
    }
    if (dia==7){
      resp.textContent="el dia 7 es Domingo"
    } 
    if (dia >= 8){
      resp.textContent =" error, coloque un numero menor que 8"
    }
    console.log(resp.textContent)
  }
}
let ejer4 = new diasem()
// ejercicio terminado

//año bisiesto
class bisiesto{
  años(){
    let año = document.getElementById("año").value
    año = parseFloat(año)
    let resp = document.getElementById("Respuesta")

    if((año % 4 == 0 && año % 100 != 0  ) || (año % 100 == 0 &&  año % 400 == 0)){
      resp.textContent = "el año es bisiesto "
    }else{
      resp.textContent = "error, el año no es bisiesto"
    }
    console.log(resp.textContent)
    console.log(año)
  }
}
let ejer5 = new bisiesto()
// ejercicio terminado

//numero perfecto 
class perfecto{
  perfec(){
    let perfec = document.getElementById("perfec").value
    perfec = parseFloat(perfec)
    let resp = document.getElementById("Respuesta")
    let ac
    let i
    let r
    ac = 0;
    i = perfec - 1;
    while(i > 0){
        r = perfec % i
        if(r == 0){
            ac = ac + i
        }
        i = i - 1;
    }
    if(perfec == ac){
        resp.textContent ="El número es perfecto."
    }else{
      resp.textContent ="El número no es perfecto."
    }
    console.log(resp.textContent)
    console.log(perfec)
  }
}
let ejer6 = new perfecto()
//terminado

//presentar numeros 
class sumapre{
  presentar(){
    let inicio = document.getElementById("inicio").value
    inicio = parseFloat(inicio)
    let fin = document.getElementById("fin").value
    fin = parseFloat(fin)
    let resp = document.getElementById("Respuesta")

    if(inicio<fin){
      resp.textContent = `los numeros entres: ${inicio} y ${fin} son\n`
    while(inicio < fin){
      resp.textContent += inicio+"\n"
        inicio++;
    }
  }
    else if (inicio >fin){
      resp.textContent = `los numeros entres: ${inicio} y ${fin} son\n`
      while (inicio>fin) {
        inicio--
        resp.textContent += inicio+"\n"
        
      }
  }
  }
  
}
let ejer8 = new sumapre()
//terminado

//divisores 
class divisores{
  dividir(){
    let num1 = document.getElementById("num1").value
    num1 = parseFloat(num1)
    let resp = document.getElementById("Respuesta")
  let numeros = 2
  resp.textContent = `los divisores de : ${num1}\n`
  for (numeros ;numeros < num1/2; numeros++) {
      if (num1 % numeros === 0) {
        resp.textContent += numeros+"\n"
          console.log(num1, numeros)
      }
  }
  }
}
let ejer7 = new divisores()
//terminado 

//sumar y contar 
class sumacontar{
  sumcant(){
    let num1 = document.getElementById("num1").value
    num1 = parseFloat(num1)
    let num2 = document.getElementById("num2").value
    num2 = parseFloat(num2)
    let resp = document.getElementById("Respuesta")
    let sum = 0
    let cont = 0
    let rem = num1
    while(num1<num2){
      sum=sum + num1
      cont++
      num1++
    }
    resp.textContent=`la suma entre : ${rem} y ${num2} es:${sum} y la cantidad entre los numeros es de:${cont} `
  }
}
let ejer12 = new sumacontar()
//terminado