<template>
  <div v-if="showSpinner" class="spinner-container">
    <div class="spinner">
      <pre id="code">{{ code }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpinnerComp",
  data() {
    return {
      codeLines: [
        "Accessing mainframe...",
        "Initiating encryption protocols...",
        "Cracking security layers...",
        "Injecting virus...",
        "Overloading firewall...",
        "Extracting sensitive data...",
        "Mission accomplished. Data acquired.",
        "Loading.",
        "Loading..",
        "Loading...",
        "Loading.",
        "Loading..",
        "Loading...",
        "Welcome",
      ],
      currentLine: 0,
      code: "",
      showSpinner: true,
    };
  },
  mounted() {
    this.updateCode();
  },
  methods: {
    updateCode() {
      if (this.currentLine === this.codeLines.length) {
        setTimeout(
          () => {
            // Hide the spinner after animation completes
            this.showSpinner = false;
          },
          // Adjust timeout according to your animation speed
          3000
        );
        return;
      }

      this.code = this.codeLines[this.currentLine];
      this.currentLine++;

      setTimeout(this.updateCode, 1000); // Change this value to adjust animation speed
    },
  },
};
</script>

<style scoped>
.spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  font-family: "Courier New", monospace;
  font-size: 31px;
  color: #18c8e3;
  white-space: pre;
}
</style>
