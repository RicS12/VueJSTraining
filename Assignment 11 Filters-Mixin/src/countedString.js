export const countedString = {
    computed: {
        counting() {
            return `${this.counted} (${this.counted.length})`
        }
    }
};