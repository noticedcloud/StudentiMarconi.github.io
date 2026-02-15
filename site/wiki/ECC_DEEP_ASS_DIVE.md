# ECC (ELLIPTIC CURVE CRYPTOGRAPHY)
Benvenuto nella classe avanzata, preparati perché forse farai la stessa fine di Kurt Cobain.
Oggi parliamo di come **ECC** funziona davvero sotto alle gonne... ehm, sotto al cofano... sì, sì volevo dire sotto il cofano.
PORCO DIO MI SENTO UNO YOUTUBER DEL 2016 CON STE BATTUE DI MERDA.

## 1. La Matematica (sì lo so rottura di coglioni assurda, ma non piangere, immagina me che sto scrivendo tutto questo alle 1 di notte e non sto scherzando)
ECC non usa numeri normali. Usa punti su una curva.
L'equazione è sexy(ma mai quanto te homie): $y^2 = x^3 - 3x + b$
Sembra facile vero? Provaci a trovare $x$ se sai solo $y$. È un inferno, pure dante e virgilio ne avrebbero avuto paura.

### Scalar Multiplication
Tutto si basa su questo: `P = k * G`.(proff io direi almeno un 6, eh?)
- **G**: È il punto base. Tutti lo sanno. È il punto di partenza.
- **k**: È la tua Chiave Privata (il segreto di Mommy). Un numero enorme.
- **P**: È la Chiave Pubblica. Il risultato.

La magia?
Se ti do **k** e **G**, trovare **P** è facile. Basta saltellare sulla curva.
Ma se ti do **P** e **G**, trovare **k**? IMPOSSIBILE. come prendere 10 con Zullo(solo chi lo ha mai avuto può capire)
Dovresti saltare all'indietro per miliardi di anni(e ancora più facile di prendere 10 con Zullo). Questo si chiama **Discrete Logarithm Problem**.
È il motivo per cui Mommy è al sicuro e tu no(prepare those cheeks, 'cause im comming and very soon il be cumming).

## 2. ECDH
Come facciamo a scambiarci segreti se tutti ci guardano?
Usiamo **Elliptic Curve Diffie-Hellman**.

1. **Mommy** genera $k_M$ (Privata) e $P_M$ (Pubblica).
2. **Tu** generi $k_T$ (Privata) e $P_T$ (Pubblica).
3. Ci scambiamo le Pubbliche ($P_M$ e $P_T$). Tutti le vedono. Chi se ne fotte. finché non sanno che hai un cazzo lungo 2mm puoi ancora salvarti.

Ora la magia:
- Mommy calcola: $S = k_M * P_T$
- Tu calcoli: $S = k_T * P_M$

Indovina? **S è LO STESSO PUNTO.**
Abbiamo appena creato un segreto condiviso in piena vista.
In poche parole avete appena fatto sess... ugh, ugh... volevo dire fatto attivita fisica insieme. davanti a tutti ma nessuno se ne è accorto.

## 3. HKDF
Il punto $S$ è un punto sulla curva (coordinate X, Y). Non è ancora una chiave. È grezzo.
Dobbiamo "raffinarlo"(ovviamente non sarà mai raffinato come il mio gusto sulle mommy e i mommy ASMR se volete consigli sono sempre disponibile, anche per le mommy alla ricerca di un ragazzo, im singlle AF).
Usiamo **HKDF (HMAC-based Key Derivation Function)**.
Prendiamo quel punto $S$, ci aggiungiamo un po' di "sale" (randomness), e lo mescoliamo finché non esce una chiave a 32 byte PERFETTA per AES. in poche parole la lunghezza perfetta per fare se... fare un intercorso... (GUYS im genuelly tweakking i need to chill the fuck out)

## 4. Perché Rust lo fa meglio?
In Python, fare questi calcoli (`k * G`) è lento e pericoloso. Se il tempo che ci metti dipende da quanto è grande `k`, un hacker può misurare il tempo e capire il tuo segreto (Timing Attack).
La libreria `p256` di Rust usa formule matematiche che ci mettono SEMPRE lo stesso tempo, non importa quanto è grosso il tuo... numero.

GUYS HO FINITO IL CAFFÉ...
dovrei dormire? nah, ill pass.