
// VARIABLES
const formulario = document.getElementById('formulario')
const year = document.getElementById('year')
// console.log(year)
const yearActual = new Date().getFullYear()
// console.log(yearActual)
const yearsAnterior = yearActual - 8
// console.log(yearsAnterior)


// EVENTOS
document.addEventListener('DOMContentLoaded' , e => {
    cargarYears()
    addEventListener()
})

function addEventListener(){
    year.addEventListener('change', e => {
        // console.log('cambio...',e.target.value)
        const opciones = parseInt(e.target.value)
        // console.log('si carnal', typeof opciones)

        switch (opciones) {
            case 2015 :
               mensaje()
                break;
            case 2016 : 
                mensaje1()
                break;
            case 2017 : 
                mensaje2()
                break;
            case 2018 : 
                mensaje3()
                break;
            case 2019 : 
                mensaje4()
                break;
            case 2020 : 
                mensaje5()
                break;
            case 2021 : 
                mensaje6()
                break;
            case 2022 : 
                mensaje7()
                break;
            case 2023 : 
                mensaje8()
                break;
            case 0 : 
                mensaje9()
                break;
            default: 'No existe el año seleccionado'
                break;
        }
    
    })
}


// FUNCIONES
function cargarYears(){
    for(i = yearsAnterior ; i <= yearActual ; i++){
        // console.log(typeof i)
       const option = document.createElement('option')
       option.value = i
       option.textContent = i
       
       year.appendChild(option)
    }
}

function mensaje(){
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')

    const year2015 = document.querySelector('.year2015')
    year2015.classList.remove('disabled')
}

function mensaje1(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')

    const year2016 = document.querySelector('.year2016')
   year2016.classList.remove('disabled')
}

function mensaje2(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')

   const year2017 = document.querySelector('.year2017')
   year2017.classList.remove('disabled')
}

function mensaje3(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')

    const year2018 = document.querySelector('.year2018')
    year2018.classList.remove('disabled')
}

function mensaje4(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')

    const year2019 = document.querySelector('.year2019')
    year2019.classList.remove('disabled')
}

function mensaje5(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')

    const year2020 = document.querySelector('.year2020')
    year2020.classList.remove('disabled')
}

function mensaje6(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')

    const year2021 = document.querySelector('.year2021')
    year2021.classList.remove('disabled')
}

function mensaje7(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')

    const year2022 = document.querySelector('.year2022')
    year2022.classList.remove('disabled')
}

function mensaje8(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')

    const year2023 = document.querySelector('.year2023')
    year2023.classList.remove('disabled')
}

function mensaje9(){
    const year2015 = document.querySelector('.year2015')
    year2015.classList.add('disabled')
    const year2016 = document.querySelector('.year2016')
    year2016.classList.add('disabled')
    const year2017 = document.querySelector('.year2017')
    year2017.classList.add('disabled')
    const year2018 = document.querySelector('.year2018')
    year2018.classList.add('disabled')
    const year2019 = document.querySelector('.year2019')
    year2019.classList.add('disabled')
    const year2020 = document.querySelector('.year2020')
    year2020.classList.add('disabled')
    const year2021 = document.querySelector('.year2021')
    year2021.classList.add('disabled')
    const year2022 = document.querySelector('.year2022')
    year2022.classList.add('disabled')
    const year2023 = document.querySelector('.year2023')
    year2023.classList.add('disabled')
}