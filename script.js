window.addEventListener('DOMContentLoaded', () => {


    fetch('js/index.xml')
        .then(function (response) {
            return response.text();
        })
        .then(function (xmlDocText) {
            let arrayParg = [];
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlDocText, "text/xml");
            const MenuCards = xmlDoc.querySelectorAll('container1');
            const tableBody = document.querySelector("main");
            console.log(MenuCards);
            MenuCards.forEach(function (student) {
                const imgScr = student.querySelector("imagine__src").textContent;
                const linkScr = student.querySelector("link__href").textContent;
                const title = student.querySelector("title").textContent;
                const par1 = student.querySelector('par1');
                const par2 = student.querySelector('par2');
                const par3 = student.querySelector('par3');
                arrayParg.push(par1, par2, par3);
                tableBody.innerHTML += `
                <div class="container1">
                <h2>${title}</h2>
                <div class="Conteiners">
                    <a href="${linkScr}"><img src="${imgScr}" width="500px" height="300px">
                    <span class="s1">Подробнее...</span></a>
                    <div class="blok1">
                        <p>${arrayParg[0]}</p>
                        <p>${arrayParg[1]}</p>
                        <p>${arrayParg[2]}</p>
                    </div>
                </div>
            </div>
            `
            });
        })
    }