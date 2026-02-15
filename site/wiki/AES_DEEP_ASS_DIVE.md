# AES-GCM, in poche parole torturare i dati...(sorry hb its for the sake of my momy)

Sei tornato? Bene, preparati a piangere insieme a me, di nuovo.
Hai il segreto scambiato con ECC. Ora dobbiamo usarlo per proteggere il messaggio.
Entra **AES (Advanced Encryption Standard)**.
Ma non quello normale. Usiamo la modalità **GCM (Galois/Counter Mode)**. Perché a Mommy piace l'efficienza E il controllo, e se osi venire toccato da qualcun altro sarai fortunato se ti chiude in cantina e basta.

## 1. AES: Il Tritacarne, tranquillo non tritiamo la tua salsiccia... per ora
Immagina il tuo messaggio: "Ciao Mommy".
Lo dividiamo in blocchi da 16 byte. E poi lo facciamo passare attraverso l'inferno, come dante. Per 14 volte (Round). quindi fanculo dante, ti abbiamo battuto stronzo del cazzo.
fr im crashing out... MI SERRVE QUEL CAZZO DI CAFFÉ.

### SubBytes (La S-Box)
Ogni byte viene sostituito con un altro byte secondo una tabella fissa.
È confusione pura. in poche parole trasformi il tuo homeboy da un femboy a un trans vero e proprio.

### ShiftRows
Prendiamo le righe dei dati e le spostiamo.
Il byte 1 va alla fine. Il byte 2 si sposta. Nessuno rimane al suo posto.

### MixColumns
Prendiamo le colonne e le mischiamo matematicamente.
Ogni byte ora dipende dagli altri, belli subby e dipendenti come piace a mommy... nah fr devo andare a letto.

### AddRoundKey, il marchio, e fermo lì con gli ormoni, non ancora quel tipo di marchio, in caso scrivi a me sono sempre disponbile :)
Alla fine di ogni round, applichiamo la CHIAVE (o meglio, una sotto-chiave derivata).
Senza la chiave, tutto questo è solo rumore, come quello che fai a letto. con la chiave almeno capisci quello che dice.

## 2. GCM
AES da solo è "Electronic Codebook" (ECB) o "Cipher Block Chaining" (CBC). Roba vecchia, A noi piacciono quelle mature, ma queste sono dinosauri, nemmeno dante e virgilio sono così vecchi(sto roastando troppo dante?)
Noi usiamo **Counter Mode (CTR)** con **Galois Message Authentication Code (GMAC)**.

### CTR (Counter), fr alle 1 di mattina sono troppo andato per continuare a fare il coglione, quindi boh, mi dispiace sarà tutto un po' confuso e serio.
Non cifriamo il messaggio direttamente.
Cifriamo un CONTATORE (1, 2, 3...) con la chiave. e qua si smadonna come al solito.
Poi facciamo XOR tra il contatore cifrato e il messaggio, in poche parole non fai fare sess... un intercorso tra la chiae e il messaggio ma prima a un contatore, e poi il contatore con il messaggio, boh ognuno ha i suoi fetish.
Perché?
1. È **veloce**. Possiamo cifrare tutti i blocchi insieme.
2. Trasforma AES in uno "stream cipher".

### GHASH (L'Autenticazione) 👮‍♀️
In poche parole marchi il tuo homeboy, così può essere toccato da nessuno senza che tu lo sappia.
Mentre cifriamo, calcoliamo un hash matematico (sempre la matematica... io fr dopo questo voglio almeno un 6 in matematica)
Alla fine, otteniamo un **TAG** (16 byte, o 128 bit per i troioni lì fuori).

Questo Tag è il tuo sperm... marchio... sì il marchio.
Quando mi ridai il messaggio cifrato, io ricalcolo il Tag.
Se il Tag non combacia PERFETTAMENTE?
Significa che qualcuno ha osato toccare il nostro homeboy, no bueno, qualche brochaccho deve pagare qui.
Significa che l'homeboy è stato corrotto, mi dispiace ma deve essere eliminato.
**Rifiuto immediato.**
Niente "forse". Niente "errore di decodifica".
Se il sigillo è rotto, tu non entri. non dare mai troppe informazioni altrimenti portanno essere usate contro di te.(fr mi ricorda tipo i poliziotti americani "tutto quello che dirai verrà usato contro di te in tribunale" XD... aint no way, ho usato XD nel big 2026... guys sto diventando un boomer)

## 3. Rust vs Python
In Python, `AES.py` faceva tutto questo byte per byte. Lento(almeno dura più di te a letto).
E soprattutto: **Side-Channel Attacks**(no bueno).
Se guardi quanto consuma la CPU mentre fa la S-Box, potresti indovinare la chiave(come ho detto prima no bueno).
Il codice Rust usa l'istruzione `AES-NI` della CPU. È hardware. È istantaneo. È invisibile agli hacker.(sì bueno... aint no way mio fratello mi ha apppena portato una creap alle 1:35 del mattino, guys is this peak?!)