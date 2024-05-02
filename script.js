window.addEventListener('DOMContentLoaded', function() {

    let arrayParg = [];

    fetch('index.xml')
        .then(function (response) {
            return response.text();
        })
        .then(function (xmlDocText) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlDocText, "text/xml");
            const MenuCards = xmlDoc.querySelectorAll('container1');
            const tableBody = document.querySelector("main");
            let i = -1;
            MenuCards.forEach(function (student) {
                i++;
                const imgScr = student.querySelector("imagine__src").textContent;
                const linkScr = student.querySelector("link__href").textContent;
                const title = student.querySelector("title").textContent;
                let par1 = student.querySelector('par1').textContent;
                let par2 = student.querySelector('par2').textContent;
                let par3 = student.querySelector('par3').textContent;
                arrayParg.push({par1, par2, par3});
                tableBody.innerHTML += `
                <div class="container1">
                <h2>${title}</h2>
                <div class="Conteiners">
                    <div class="linkP">
                        <img src="${imgScr}" width="500vw" height="300vw">
                        <a href="${linkScr}">
                        <span class="s1">Подробнее...</span></a>
                    </div>
                    <div class="blok1">
                        <p>${arrayParg[i].par1}</p>
                        <p>${arrayParg[i].par2}</p>
                        <p>${arrayParg[i].par3}</p>
                    </div>
                </div>
            </div>
            `;
            });
        });
});