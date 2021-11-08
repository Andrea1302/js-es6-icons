
// 1 estrapolo da ogni oggetto contenuto nell array ciò che mi servirà in seguito da inserire nel mio html
// 2. guardo tramite font awesome come sono scritte le classi per le icone.
// 3. creo il mio html da JS inserendo al posto  delle chiavi il suo valore
// 4 check del contenuto e inizio css
// 5 aggiungo le classi e il colore alle icone



// richiamo l l id in cui vorrò scrivere 
const mainContainer = document.getElementById("container");


// Array di oggetti 
const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


icone.forEach((oggetto)=> {
    // console.log(oggetto.name);
    let innerHtml = `
    <button class="icone_struttura"> 
         <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name} ${oggetto.color}"></i>
         <div> ${oggetto.name} </div>
     </button>`
    mainContainer.innerHTML += innerHtml
})





// // prova filtra per tipo 
// var selezione = document.getElementById("selezione_icone");
// function show(){
// //   var as = document.forms[0].ddlViewBy.value;
//   var strUser = selezione.value;
//   console.log(strUser);
// //   console.log(as, strUser);
// }
// selezione.onchange=show;
// show();

// const user = icone.filter((elemento)=> elemento.type === "user");
// console.log(user);

// const vegetable = icone.filter((elemento)=> elemento.type === "vegetable")
// console.log(vegetable);

// const animal = icone.filter((elemento)=> elemento.type === "animal")
// console.log(animal);

// var selezione = document.getElementById("selezione_icone");

// // function show(){
// //   var as = document.forms[0].ddlViewBy.value;
// var elementoOggetto = selezione.value;

// user.map((elemento)=>{
//     if ( elementoOggetto === elemento.type ){
//         // console.log(elemento.name);
//         let innerHtml = `
//         <button class="icone_struttura"> 
//              <i class="${elemento.family} ${elemento.prefix}${elemento.name} ${elemento.color}"></i>
//              <div> ${elemento.name} </div>
//          </button>`
//         return innerHtml
//       } else {
//         icone.map((oggetto)=> {
//             // console.log(oggetto.name);
//             innerHtml = `
//             <button class="icone_struttura"> 
//                  <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name} ${oggetto.color}"></i>
//                  <div> ${oggetto.name} </div>
//              </button>`
//             // mainContainer.innerHTML += innerHtml
//             return innerHTML
//         })
//       }
// })
// animal.map((elemento)=>{
//     if ( elementoOggetto === elemento.type ){
//         let innerHtml = `
//         <button class="icone_struttura"> 
//              <i class="${elemento.family} ${elemento.prefix}${elemento.name} ${elemento.color}"></i>
//              <div> ${elemento.name} </div>
//          </button>`
//         return innerHtml
//       } else {
//         icone.map((oggetto)=> {
//             // console.log(oggetto.name);
//             innerHtml = `
//             <button class="icone_struttura"> 
//                  <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name} ${oggetto.color}"></i>
//                  <div> ${oggetto.name} </div>
//              </button>`
//             return innerHtml
//         })
//       }
// })
// vegetable.map((elemento)=>{
//     if ( elementoOggetto === elemento.type ){
//         let innerHtml = `
//         <button class="icone_struttura"> 
//              <i class="${elemento.family} ${elemento.prefix}${elemento.name} ${elemento.color}"></i>
//              <div> ${elemento.name} </div>
//          </button>`
//          return innerHtml
//       } else {
//         icone.map((oggetto)=> {
//             // console.log(oggetto.name);
//             innerHtml = `
//             <button class="icone_struttura"> 
//                  <i class="${oggetto.family} ${oggetto.prefix}${oggetto.name} ${oggetto.color}"></i>
//                  <div> ${oggetto.name} </div>
//              </button>`
//             return innerHtml
//         })
//       }
// })
// const inn = oggetto
// mainContainer.innerHTML += inn