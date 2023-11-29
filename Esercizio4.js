/*Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."*/
function lanciaDadi() {
  console.log("Lancio dei dadi in corso ...");
  let dado1 = Math.ceil(Math.random() * 6);
  let dado2 = Math.ceil(Math.random() * 6);
  setTimeout(
    () => console.log(`Lancio dei dadi:Dado1:${dado1},Dado2:${dado2}`),
    2000
  );
}
lanciaDadi();
