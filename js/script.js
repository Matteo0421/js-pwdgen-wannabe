//1
const firstName = prompt('Inserisci il nome')

//2
const lastName = prompt('Inserisci il cognome')

//3
const favouriteColor = prompt('Inserisci il tuo colore preferito')

//4
const favouriteNumber = prompt('Inserisci il tuo numero preferito')

console.log (firstName, lastName, favouriteColor, favouriteNumber);

//5
const password = firstName + lastName + favouriteColor + favouriteNumber

document.getElementById('prova').innerHTML = 
`
<p>
${password}
</p>
`