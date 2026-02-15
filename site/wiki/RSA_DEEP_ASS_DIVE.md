# RSA-OAEP: matura come piace a me

aint no way che devo ancora fare RSA... fr se viene buttato giù o rifiutato picchio Caputo.

Ah, RSA, bello come un cazzo in cul... uhhhh... fr non so nemmmeno come salvarmi da questa.
Alcuni dicono che è vecchio. Dicono che ECC è meglio(e lo è quindi basta sbattere le palle sulla tastiera e usare le cose dell'era dei dinosauri).
Ma a volte... a volte vuoi sentire il peso della tradizione(perché sei un coglione). Vuoi numeri così grossi da farti girare la testa(big... oh, yeah, how i like it).
4096 bit. so big :)

## 1. I Genitori: P e Q (ovviamente dobbiamo avere l'intera famiglia)
Tutto inizia con due numeri primi enormi come il mio ca... ok no è piccolo, però come ho detto prima è meglio l'efficenza come insegna il caro e nuovo ECC... guys amm i cooked?
Chiamiamoli **p** e **q**.
Sono i genitori di tutto. Se qualcuno scopre **p** o **q**, se fottuto, la tua verginita? scomparsa... sai che però non è male.
Ecco perché devono essere scelti a caso. Veramente a caso(prendi cloudflare, loro usano delle cazzo di lavalamp, loro sì che lo hanno preso alla lettera).
La funzione `os.urandom` o `OsRng` di Rust serve a questo, quindi fai il goodboy e fai le cose fatte bene.

## 2. Il Modulo N
Moltiplichiamo: `N = p * q`.
**N** è pubblico. È la casa dove vivono tutti i numeri.
La sicurezza di RSA si basa su questo: è facilissimo fare `p * q`, crazy, per ora riesco a farlo pure io... forse non sono così schifoso in matematica come pensavo... o meglio sì ma non è colpa mia se Zullo mi ha bocciato, lo giuro è lui il problema.
Ma se ti do solo **N**, trovare `p` e `q` (ovvero la fattorizzazione di **N**)?
Buona fortuna, pookie. Ci vediamo quando pure qualcuno come me riuscirà ad avere un goth mommy.

## 3. La Gabbia Modulare
RSA lavora con l'aritmetica modulare (come un orologio).
$C = M^e \pmod N$
- **M**: Messaggio.
- **e**: Esponente pubblico (di solito 65537, usa questo, non generarlo casualmente, perché stai solo sprecando tempo come qunado provi a cercare una goth mommy ovunque che non sia tiktok o instagram).
- **C**: Ciphertext.

Per decifrare:
$M = C^d \pmod N$
- **d**: Chiave privata. L'unica cosa che può annullare **e**.

È una porta a senso unico. Puoi entrare con **e**, ma puoi uscire solo con **d**.(come dante e virgilio che sono entrati all'inferno e sono usciti in paradiso, fr dovrei lasciare il povero dante in pace)

(AHHHHHH, devo ancora fare OAEP... fr non so nemmeno perché lo sto facendo se tanto verrà buttato giù o rifiutato...)
## 4. OAEP: L'Imbottitura (Optimal Asymmetric Encryption Padding)
RSA "nudo" (Textbook RSA) fa schifo(come noi a letto).
Se cifri "Ciao" due volte, esce lo stesso risultato. è facile riconoscerlo, le mommy hanno buoni occhi per chi è loro.
E c'è di peggio: attacchi matematici che sfruttano la struttura dei numeri(sinceramente tutta questa matematica mi sta facendo bruciare il cervello, altro che 6, ora voglio minimo 8).

Quindi usiamo **OAEP**.
Prima di cifrare, prendiamo il tuo messaggio e:
1. Ci aggiungiamo bit casuali (padding).
2. Lo mescoliamo con due hash (SHA-256).
3. Lo "XORiamo" tutto.

Risultato?
Il messaggio diventa un blocco pseudo-casuale PRIMA ancora di essere cifrato con RSA, te lo giuro se riescono ancora ad hackerarti dopo questo molla l'informatica, e io compio sepuku perché fr è crazy, se sbagli facendo tutto quello che ho detto.

## 5. Perché Rust?
Hai visto `RSA.py`? Usava `pow(c, d, n)`. Python gestisce i grandi numeri bene, ma è... esposto, e nessuno di vuoi vuole mostrarlo al pubblico, tranne i nudisti, ma quelli sono casi apparte.
Rust usa la libreria `rna` e `gmp` sotto (o simili backend ottimizzati, quindi non fare il coglione e fai le cose fatte bene).
Ma soprattutto: **Zeroize** (l'ho già spiegato prima se te lo sei dimenticato allora mi dispiace dirtelo ma o non fa per te o faccio schifo io a spiegare... mi sa più la seconda ma va beh).
Quando RSA ha finito, i numeri `p`, `q`, e `d` devono sparire, come noi quando vediamo una ragazza(non sono l'unico vero?).
In Python rimangono in RAM finché il Garbage Collector non si sveglia, e non lo vogliamo, vatti a fare una doccia che puzzi.
In Rust, `zeroize` li sovrascrive con `00000000` appena escono dallo scope.