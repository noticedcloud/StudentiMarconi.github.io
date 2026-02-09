<script setup>
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';
</script>

# Tutorial

<Stepper value="1" linear>
	<StepItem value="1">
		<Step>Introduzione</Step>
		<StepPanel v-slot="{ activateCallback }">
			<p>Ci sono tanti modi con i quali si puó entrare su MarconiCraft: diverse piattaforme, diversi launcher, diverse mod...</p>
			<p>Il Server contiene un sacco di funzionalità in piú rispetto a Minecraft vanilla, tra cui la <b>chat vocale</b>, le <b>emote</b>, le <b>skin</b> anche per chi ha craccato il gioco e tante altre.</p>
			<p>Questa guida ti aiuterà a creare il miglior setup per te, in modo che tu possa godere dell'esperienza migliore con piú funzionalità del Server possibili.</p>
			<p>Il tutorial è interattivo e si adatta in base a come rispondi alle domande. Se ci sono più opzioni, quella colorata è sempre quella che ti porterà ad un setup migliore.</p>
			<p>Se sbagli una risposta, puoi premere "Indietro" in qualsiasi momento. Puoi anche premere il tasto in alto a destra per copiare il link che porta alla configurazione corrente. Inoltre, all'inizio di ogni sezione, trovi dei link a dei paragrafi del FAQ che risponderanno a qualsiasi domanda tu possa avere sullo step corrente.</p>
			<p>Premi "Avanti" per iniziare.</p>
			<Button label="Avanti" @click="activateCallback('2')" />
		</StepPanel>
	</StepItem>
	<StepItem value="2">
		<Step>PC</Step>
		<StepPanel>
			<Button icon="pi pi-chevron-left" label="Indietro" @click="activateCallback('1')" />
			<p>Si può giocare anche da altre piattaforme, come mobile e console, ma per un'esperienza completa sarebbe necessario un computer.</p>
			<p>Non importa se non hai ancora Minecraft sopra, ti verrà spiegato come scaricarlo senza costo.</p>
			<p>Non serve un PC tanto potente, Minecraft vanilla è abbastanza leggero, soprattutto su un Server dedicato.</p>
			<p>Ti verrà anche spiegato come ottimizzare il gioco per renderlo più fluido e fare più FPS.</p>
			<p>Quindi, <b>hai un PC sul quale poter giocare?</b></p>
			<div class="py-6">
				<Button label="Si" @click="activateCallback('3')" />
				<Button label="No" @click="activateCallback('7')" />
			</div>
		</StepPanel>
	</StepItem>
	<StepItem value="3">
		<Step>Skin</Step>
		<StepPanel>a
		</StepPanel>
	</StepItem>
	<StepItem value="4">
		<Step>Launcher</Step>
		<StepPanel>
		</StepPanel>
	</StepItem>
	<StepItem value="5">
		<Step>ElyPrismLauncher</Step>
		<StepPanel>
		</StepPanel>
	</StepItem>
	<StepItem value="6">
		<Step>Modpack</Step>
		<StepPanel>
		</StepPanel>
	</StepItem>
	<StepItem value="7">
		<Step>Fabulous</Step>
		<StepPanel>
		</StepPanel>
	</StepItem>
	<StepItem value="8">
		<Step>Connessione</Step>
		<StepPanel>
		</StepPanel>
	</StepItem>
	<StepItem value="9">
		<Step>Setup</Step>
		<StepPanel>
		</StepPanel>
	</StepItem>
	<StepItem value="10">
		<Step>Fine</Step>
		<StepPanel>
		</StepPanel>
	</StepItem>
</Stepper>
