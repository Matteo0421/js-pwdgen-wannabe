//1
const firstName = prompt('Inserisci il nome')

const lastName = prompt('Inserisci il cognome')

const favouriteColor = prompt('Inserisci il tuo colore preferito')

console.log (firstName, lastName, favouriteColor);

document.getElementById('prova').innerHTML = 
`
<p>
Il tuo nome è ${firstName} ${lastName}, il tuo colore preferitpo è il ${favouriteColor}
</p>
`