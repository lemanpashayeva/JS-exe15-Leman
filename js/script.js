let p = document.querySelector("#demo");
let btn = document.querySelector("#showBtn");
let input = document.querySelector("#date");

function ShowDate(){
    let d=new Date(input.value);
    package.innerText= " ";
    switch (d.getDay()) {
        case 0:
            p.innerText += "Bazar";
            break;
        case 1:
            p.innerText += "Bazar ertesi";
            break;
        case 2:
            p.innerText += "Cersembe axsami";
            break;
        case 3:
            p.innerText += "Cersembe";
            break;
        case 4:
            p.innerText += "Cume axsami";
            break;
        case 5:
            p.innerText += "Cume";
            break;
        case 6:
            p.innerText += "Senbe";
            break;
    };
    switch (d.getMonth()) {
        case 0:
            p.innerText += " Yanvar";
            break;
        case 1:
            p.innerText += " Fevral";
            break;
        case 2:
            p.innerText += " Mart";
            break;
        case 3:
            p.innerText += " Aprel";
            break;
        case 4:
            p.innerText += " May";
            break;
        case 5:
            p.innerText += " Iyun";
            break;
        case 6:
            p.innerText += " Iyul";
            break;
        case 7:
            p.innerText += " Avqust";
            break;
        case 8:
            p.innerText += "Sentyabr";
            break;
        case 9:
            p.innerText += " Oktyabr";
            break;
        case 10:
            p.innerText += "Noyabr";
            break;
        case 11:
            p.innerText += "Dekabr";
            break;
    };
    p.innerText += " " + d.getDate();
}

btn.addEventListener("click" , showBtn)