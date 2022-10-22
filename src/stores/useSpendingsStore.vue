<script>
import { defineStore } from 'pinia';

export const useSpendingsStore = defineStore('spendings', {
    state: () => ({
        spendings: []
    })
});
</script>