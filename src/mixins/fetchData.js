export default function (type = null, key) {
  return {
    data() {
      return {
        [key]: type,
        isLoading: true,
      };
    },
    async created() {
      this[key] = await this.getData();
      this.isLoading = false;
    },
  };
}
