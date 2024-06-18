const API_AUTOS = 'http://localhost:5000/autos'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTI2ZDgzMDU2NjMzNmJhNmU4Mzc2NGIyZjZiZmI2MSIsInN1YiI6IjY1Y2U2NDA0MTNhMzg4MDE4NzlmNjBmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tZTxSjr1fLqIi2LSwadmPT37grY2IF6y3d4LUHLbEmE'
    }
}

const obtenerautos = async () => {

    const resultado = await fetch(API_AUTOS, options)
    const data = await resultado.json()


    const autos = data
    console.log(autos)

    let divautos = document.querySelector('#contenedorAutos')


    for (let i = 0; i < autos.length; i++) {

        // if (trim(autos[i].imagen) > 0) 
        //     autos[i].imagen = ""+trim(autos[i].imagen)
        
        const autoAInsertar =`
        <div class="auto-item">
                    <a href="./templates/detail-auto.html" target="_blank">
                        <img src=${autos[i].imagen} width="250" alt="" class="auto-item-img">
                        <div class="auto-item-detail">
                            <p class="auto-item-detail-title">${autos[i].marca}</p>
                            <p class="auto-item-detail-subtitle">${autos[i].modelo}</p>
                            <p class="auto-item-detail-subtitle">${autos[i].año}</p>
                        </div>
                    </a>
                </div>
        
        `
        divautos.insertAdjacentHTML('beforeend', autoAInsertar);
    }

}


obtenerautos()
