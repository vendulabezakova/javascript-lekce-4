//Povinné domácí úkoly: 



//ÚKOL Č. 1 - REGISTRACE NA OČKOVÁNÍ

/*const fullname = prompt("Zadej své jméno:")
const password = (prompt("Zadej heslo:"))
const age = Number(prompt("Zadej svůj věk:"))


if(age >= 65) {
    document.body.innerHTML += "Věk je v pořádku"
} else {
    document.body.innerHTML += "Nízký věk"
}

if(password.length > 8) {
    document.body.innerHTML += "Silné heslo"
} else {
    document.body.innerHTML += "Slabé heslo"
}*/




//ÚKOL Č. 2 CENA VSTUPENKY
const age = Number(prompt("Zadej svůj věk:"))
const plnaCena = 12

if(age < 6) {
    cena = 0
} else if(age === 6) {
    cena = plnaCena*0.65
} else if(age < 27) {
    cena = plnaCena*0.65
} else if(age >= 27 && age <= 64) {
    cena = plnaCena
} else {
    cena = plnaCena/2
}

document.body.innerHTML = `
<p style="font-size:32px">Cena vstupenky je pro věk ${age} let <span style="color:#A78AB7; font-weight:700"> ${Math.round(cena)} €</span>.</p>
`

/*document.body.innerHTML += "Cena vstupenky je pro věk " + age + " let " + Math.round(cena) + " €."*/

//---




//CVIČENÍ
/*const password = prompt("Zadej heslo.").length //zjištění délky textového řetězce

document.body.innerHTML = password*/

/*document.body.innerHTML = "Vendula".toLowerCase() //metoda na změnu na mlaá písmena*/

/*document.body.innerHTML = "Vendula ".trim() //odstranění nežádoucích mezer, např. do formů */

/*document.body.innerHTML = "Vendula".slice(0, 2) //ukazuje vybrané znaky, matematicky je to interval, který je zleva uzavřený, zprava otevřený*/

/*document.body.innerHTML = "Vendula".indexOf("d") //pokud chci extrahovat pořadí znaku*/

/*document.body.innerHTML = "20".padStart(30, "*") //doplní vybraný znak na začátek řetězce, první číslo = jak dlouhý má být řetězec, druhé číslo = jakým znakem to chci doplnit*/



//INTERPOLACE ŘETĚZCŮ: umožňje pohrát si se způsobem zápisu nějakých výskytů: používá se znak backtick` (zpětný apostrof), modernější než psaní zápisu pomocí uvozovek a plusek.

/*const order = {
    id: 37214,
    product: 'pěnová matrace',
    delivery: '21.8.2021',
  };
  
  document.body.innerHTML = `
    <p>ID objednávky: ${order.id},</p>
    <p>název produktu: ${order.product},</p>
    <p><b>bude doručen ${order.delivery}.</b></p>
    <p>Velká písmena u jména produktu: ${order.product.toUpperCase()}
    `*/

//ÚKOL Č. 1 - VLASTNOSTI A METODY
/*let title = "Tahle země není pro starý"

document.body.innerHTML = title.length;
document.body.innerHTML = title.toUpperCase();
document.body.innerHTML = title.slice(0, 5);
document.body.innerHTML = title.slice(title.length - 5, title.length);*/

//ÚKOL Č. 2 - E-MAILY
/*const email = prompt("Email:")
const atIndex = email.indexOf("@")
const emailParts = {
    userName: email.slice(0, atIndex),
    domain: email.slice(atIndex + 1),
};

document.body.innerHTML = `
<p>Uživatelské jméno: ${emailParts.userName},
Doména: ${emailParts.domain}
</p>
`*/

//ÚKOL Č. 3 - DORUČOVÁNÍ
/*const street = prompt("Ulice:")
const number = prompt("Číslo popisné:")
const city = prompt("Město:")
const code = prompt("PSČ:")

document.body.innerHTML = `
<address><b>Adresa:</b></br>
${street} ${number}</br>
${code} ${city}</br>
</address>
`*/

//PODMÍNKY - zákl. stavební kámen programovacích jazyků
/* Podmínka může být jen s pravdivou větví a nemusíme psát else větev.
= přiřazení nebo změna hodnoty v proměnné, nepatří do podmínek
== nekoukají se na datové typy
=== nejlepší varianta pro podmínky, kontroluje shodu datového typu i hodnotu (musí být na obou stranách string nebo number, aby se vyhodnotila pravda)
>	větší než
>=	větší nebo rovno
<	menší než
<=	menší nebo rovno
===	rovno
!==	nerovno
*/

/*const age = prompt("Zadej věk")
const store = true

if(age >= 18) {
    document.body.innerHTML = "Vstupte"
} else {
    document.body.innerHTML = "Vstup zakázán"
}*/

/*const znamka = 18 //podobné je switch, je to jen o preferencích

if(znamka===1) {
    document.body.innerHTML = "Výborný"
} else if(znamka===2) {
    document.body.innerHTML = "Chvalitebný"
} else if(znamka===3) {
    document.body.innerHTML = "Dobrý"
} else if(znamka===4) {
    document.body.innerHTML = "Dostatečný"
} else if(znamka===5){
    document.body.innerHTML = "Nedostatečný"
} else {
    document.body.innerHTML = "Špatně zadaná známka. Rozmezí hodnot musí být 1-5."
}*/

//LOGICKÉ OPERÁTORY, výrazy
/*
&& (and) obě strany musí platit
|| (or) alespoň jedna strana musí platit*/


