---
order: 1
---

# Tutorial

:::Introduzione

Ci sono tanti modi con i quali si puó entrare su MarconiCraft: diverse piattaforme, diversi launcher, diverse mod...

Il Server contiene un sacco di funzionalità in piú rispetto a Minecraft vanilla, tra cui la **chat vocale**, le **emote**, le **skin** anche per chi ha craccato il gioco e tante altre.

Questa guida ti aiuterà a creare il miglior setup per te, in modo che tu possa avere la migliore esperienza possibile, con il maggior numero di funzionalità del Server.

Alcuni step del tutorial ti faranno una domanda: di solito, rispondere "Si" porterà a un setup migliore.

Se sbagli una risposta, puoi premere "Indietro" in qualsiasi momento.

Premi "Avanti" per iniziare.

:::PC:7

Si può giocare da molte piattaforme, come mobile e console, ma per un'esperienza completa sarebbe necessario un computer.

Non importa se non hai ancora Minecraft installato, ti verrà spiegato come scaricarlo senza costo.

Non serve un PC tanto potente, Minecraft Vanilla è abbastanza leggero, soprattutto su un Server dedicato.

Ti verrà anche spiegato come ottimizzare il gioco per renderlo più fluido e fare più FPS.

Quindi, **hai un PC sul quale poter giocare?**

:::Launcher:7

Il launcher è un programma che si occupa di scaricare Minecraft.

Alcuni launcher hanno funzionalità aggiuntive, come creare piú "istanze" (versioni separate di Minecraft, con mondi, mod e impostazioni diverse), scaricare mod/resourcepack/shader e altro ancora.

Ufficialmente, Minecraft sarebbe da scaricare con il launcher ufficiale di Mojang (riferito come "Launcher Vanilla"), ma è molto semplice e non permette di sfruttare tutte le funzionalità di MarconiCraft.

Uno dei launcher piú completi è [PrismLauncher](https://prismlauncher.org): supporta tutte le funzionalità che si possano mai volere, dalle istanze separate allo scaricare mod, resourcepack, shader, mondi e addirittura datapack senza mai lasciare il launcher.

Il launcher che consigliamo invece è [ElyPrismLauncher](https://example.com). È una versione modificata di Prism che aggiunge un altro paio di funzionalità, ma la piú importante per MarconiCraft è la possibilità di giocare in "offline mode", cioè senza un account Mojang e quindi senza pagare.

:::ElyPrismLauncher

> [!note] Nota
> ElyPrismLauncher può essere scaricato direttamente dalle repo per alcune distro:
>
> - **Arch Linux** (AUR):
>
>   ```bash
>   yay -S elyprismlauncher-bin
>   ```
>
> - **Fedora** (COPR):
>
>   ```bash
>   sudo dnf copr enable apicalshark/ElyPrismLauncher
>   sudo dnf install elyprismlauncher
>   ```

Per scaricare ElyPrismLauncher:

- Visita la pagina dell'[ultima release](https://github.com/ElyPrismLauncher/ElyPrismLauncher/releases/latest).
- In fondo alla pagina ci sono le diverse versioni del launcher. Scarica quella giusta per il tuo computer:
  - **Linux**:
    - `ElyPrismLauncher-X.X.X.tar.gz` (binario)
    - `ElyPrismLauncher-Linux-x86_64.AppImage` (AppImage)
  - **MacOS**:
    - `ElyPrismLauncher-macOS-X.X.X.zip`
  - **Windows**:
    - `ElyPrismLauncher-Windows-MinGW-w64-Setup-X.X.X.exe` (installer)
    - `ElyPrismLauncher-Windows-MinGW-w64-Portable-X.X.X.zip` (portabile)
- Avvia il launcher.
- Nella schermata principale, clicca in alto a destra su "Account" e poi "Manage Accounts...".
- Aggiungi il tuo account. Se hai pagato Minecraft, premi "Add Microsoft", altrimenti clicca "Add Offline".
- Collega il tuo account, poi attivalo cliccando la spunta vicino al tuo username.

:::Modpack:7

Come già accennato, il Server presenta tante funzioni in più rispetto a Minecraft vanilla.
Molte di queste funzionalità richiedono di scaricare delle **mod** sul vostro PC, e a volte di configurarle.

Per un'esperienza migliore e diversa dal Vanilla, consigliamo di installare [Fabulous](https://modrinth.com/modpack/fabulous-modpack), un **modpack** (cioé un insieme di mod già configurate) che comprende tutte le mod che servono per sfruttare le funzionalità di MarconiCraft, insieme a tante altre che rendono il gioco graficamente e a livello di qualità della vita. Nella sua pagina potete leggere tutte le funzionalità che aggiunge.

Anche per chi preferisce la vanilla pura o non vuole aggiunte particolari, consigliamo fortemente di provarlo.

Quindi, **vuoi scaricare Fabulous?**

:::Fabulous

Per scaricare Fabulous su ElyPrismLauncher:

- Clicca su "Add Instance" in alto a sinistra.
- A sinistra, clicca sulla scheda "Modrinth".
- Dentro "Search and filter..." scrivi "Fabulous".
- In alto, assegna un nome all'istanza (e.g., "MarconiCraft").
- Selezionalo, poi premi "OK" in basso a destra.

> [!warning] Avviso
> Fabulous contiene un buon numero di mod. Il pack è basato su Fabric, che di default non mostra nulla durante il caricamento delle mod.
> Se vedi che dopo aver avviato l'istanza Minecraft ci mette un po' ad aprirsi è normale.
> Se appare un messaggio del tipo "Minecraft non risponde", clicca su "Aspetta" oppure non toccare nulla finché non ha finito di caricare.

:::Connessione

> [!note] Nota
> Se hai deciso di non usare Fabulous, devi prima crearti un'istanza a mano:
>
> - Clicca su "Add Instance" in alto a sinistra.
> - Assicurati che la versione sia **1.21.11**.
> - Se vuoi scaricare delle mod manualmente, seleziona il tuo modloader preferito.
> - Premi "OK" in basso a destra.

Per entrare su MarconiCraft:

- Avvia l'istanza che hai creato.
- Una volta dentro il gioco, clicca su "Multiplayer" e poi "Add Server".
- Come URL inserisci `mc.studentimarconi.org`, e come nome qualcosa come "MarconiCraft".
- Premi "Done" e poi entra nel Server.

La prima volta che entri, ti verrà chiesto di inserire una password per il tuo account.
Premi T per aprire la chat, poi scrivi `/register <password> <password>` (la password va ripetuta due volte).
La prossima volta che entrerai, ti verrà chiesto di effettuare il login facendo `/login <password>`.

:::Fine

Questo è quanto. Divertiti su MarconiCraft!

:::
