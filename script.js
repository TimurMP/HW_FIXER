const apiKey = 'jBbJxkkiuvm0jgNETyTx0DCqYe8NGsMA';
const url = `https://api.apilayer.com/fixer/convertttt?to=${to.value}&from=${from.value}&amount=${amount.value}`;

let headers = {
    apikey: apiKey,

}

let reqOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: headers
}


convertB.onclick = e => {
    fetch(`https://api.apilayer.com/fixer/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, reqOptions)
        .then(response => {
            if (response.ok) {
                return response.json()

            } else {
                console.log(response)
                throw new Error("Error")
            }
        })
        .then(result => {
                if (result.success) {
                    clearStats();
                    const divStats = document.createElement('div')
                    const h1 = document.createElement('h1');
                    h1.appendChild(document.createTextNode(`Result: ${result.result}`))
                    divStats.appendChild(h1);
                    if (stats.firstElementChild) {
                        stats.replaceChild(divStats, stats.firstElementChild);
                    } else {
                        stats.appendChild(divStats);
                    }
                    console.log(result)

                } else {
                    console.log(result)
                    throw new Error(result.error.info)
                }


            }
        )
        .catch(e => {
            clearStats();
            console.log(e);
            const divStats = document.createElement('div')
            const h1 = document.createElement('h1');
            h1.appendChild(document.createTextNode(`${e.message}`))
            divStats.appendChild(h1);
            if (stats.firstElementChild) {
                stats.replaceChild(divStats, stats.firstElementChild);
            } else {
                stats.appendChild(divStats);
            }
        })


}


function clearStats() {
    if (stats.firstElementChild) {
        stats.removeChild(stats.firstElementChild);
    }
}

