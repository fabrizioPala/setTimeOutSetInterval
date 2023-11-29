/*Utilizza setTimeout per chiamare la funzione "mostraPromemoria" 
dopo un ritardo di 5 secondi.
Prima che scadano i 5 secondi stampa in console: "Il promemoria è in fase di impostazione".


// .....*/
function mostraPromemoria() {
  console.log("E' tempo di mostrare il promemoria!");
}
setTimeout(function () {
  console.log("Il promemoria è in fase di impostazione");

  
  setTimeout(mostraPromemoria, 5000);
}, 1000);

