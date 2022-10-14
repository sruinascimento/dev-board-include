    var inputSearch = document.getElementById("input-busca")
    var sections = document.querySelectorAll("section")
    var nomes = document.getElementsByTagName("h2")
    
    // for (let i = 0; i < nomes.length; i++) {
    //     console.log(nomes[i].textContent)
    // }

    inputSearch.addEventListener('keyup', (e) => {
        console.log(e.target.value)
        for (let i = 0; i < nomes.length; i++) {
            if (nomes[i].textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
              console.log("está presente")
              sections[i].style.display = ""

            } else {
                sections[i].style.display = "none"
            }
        }
    })
