<script setup lang="ts">
import Button from "@/components/button";
import { useCountStore } from "@/store/count";

const countStore = useCountStore();
</script>
<template>
  <Button @click="countStore.add"></Button>
  {{ countStore.count }}
</template>
