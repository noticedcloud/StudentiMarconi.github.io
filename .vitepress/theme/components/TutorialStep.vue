<script setup>
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";
import Button from "primevue/button";
import { inject, computed, onMounted } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    noButton: {
        type: [String, Number],
        default: null,
    },
    value: {
        type: [String, Number],
        default: null,
    },
});

const tutorial = inject("tutorial");

if (!tutorial) {
    throw new Error("TutorialStep must be used inside <Tutorial>");
}

const index = computed(() => {
    if (props.value != null) {
        return Number(props.value);
    }

    return tutorial.steps.value.indexOf(stepApi) + 1;
});

const stepApi = {
    get value() {
        return index.value;
    },
};

onMounted(() => {
    tutorial.registerStep(stepApi);
});

const isFirst = computed(() => index.value === 1);
const isLast = computed(() => index.value === tutorial.steps.value.length);

const prevValue = computed(() => String(tutorial.getBackTarget(index.value)));
const nextValue = computed(() => String(index.value + 1));

function goTo(target, activateCallback, record = true) {
    if (record) tutorial.recordNavigation(index.value, Number(target));
    activateCallback(String(target));
}
</script>

<template>
    <StepItem :value="String(index)">
        <Step>{{ title }}</Step>

        <StepPanel v-slot="{ activateCallback }">
            <Button
                v-if="!isFirst"
                label="Indietro"
                icon="pi pi-arrow-left"
                @click="goTo(prevValue, activateCallback, false)"
            />

            <slot />

            <div v-if="!isLast" class="flex gap-2">
                <Button
                    v-if="!noButton"
                    label="Avanti"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    @click="goTo(nextValue, activateCallback)"
                />

                <template v-else>
                    <Button
                        label="Si"
                        icon="pi pi-check"
                        @click="goTo(nextValue, activateCallback)"
                    />
                    <Button
                        label="No"
                        icon="pi pi-times"
                        @click="goTo(String(noButton), activateCallback)"
                    />
                </template>
            </div>
        </StepPanel>
    </StepItem>
</template>
