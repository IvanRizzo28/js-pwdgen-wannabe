const password=document.getElementById("pass");
const nome=prompt("inserisci il tuo nome");
const cognome=prompt("inserisci il tuo cognome");
const colore=prompt("inserisci il tuo colore preferito");
const classe='89';
const stringa=`${nome}${cognome}${colore}${classe}`;

password.innerHTML=stringa;
console.log(stringa);

window.addEventListener('load', function () {
    password.classList.add("anim");
})