### Milestone 3
nome repo 2: vite-boolfolio
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.
Colleghiamo questo progetto ad una repo separata.
###  Milestone 4
Nel componente principale della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end.
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.
### Milestone 5
Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.
### BONUS:
implementare la paginazione lato front office.

Iniziate installando il router di vue. Create due pagine statiche, ad esempio, Home e About us e create il file router.js dove dovrete impostare le rotte corrispondenti alle due pagine create. Inserite il router nel file main.js in modo da renderlo disponibile a livello di tutta l'applicazione. Nel file App.vue impostate il tag <router-view> che sarà il punto di inserimento di diverse pagine.
A questo punto potete inserire le voci delle pagine nel menu di navigazione e testare il tutto.
Infine create la pagina dei progetti e spostate il codice scritto venerdì in questa pagina, aggiornando gli import dei componenti. Collegate la pagina al router e testate il tutto.
Bonus:
Aggiungere la pagina singolo post, creando prima api corrispondente.