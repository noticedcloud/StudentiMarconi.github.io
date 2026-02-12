<script setup>
import Stepper from "primevue/stepper";
import { ref, provide } from "vue";

const steps = ref([]);
const lastFrom = ref({});

function registerStep(step) {
    steps.value.push(step);
}

function recordNavigation(from, to) {
    lastFrom.value[to] = from;
}

function getBackTarget(stepValue) {
    return lastFrom.value[stepValue] ?? stepValue - 1;
}

provide("tutorial", {
    steps,
    registerStep,
    recordNavigation,
    getBackTarget,
});
</script>

<template>
    <Stepper value="1" linear>
        <slot />
    </Stepper>
</template>
