<template>
  <main class="greek">
    <div class="container-fluid bg-white questionBG">
      <h1 class="container-fluid question">{{ question }}</h1>
      <input
        class="container-fluid"
        type="text"
        v-model="answer"
        placeholder="What do you say?"
      />
      <button @click="checkAnswer()">Check Response</button>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      question: "",
      // Answer I want to my question
      correctAnswer: "Did you know the sparrow flies south for the winter?",
      answer: "",
    };
  },
  // randomQuestion() {
  // },
  mounted() {
    this.randomQuestion();
  },
  methods: {
    // To generate my random question
    randomQuestion() {
      this.question =
        "What is a good saying to warn colleagues you are going to hit somone?";
    },
    checkAnswer() {
      if (this.answer === this.correctAnswer) {
        this.$router.push("/spinner");
        setTimeout(() => {
          this.$router.push("/home");
        }, 17000);
      } else {
        alert("Try a better phrase.");
      }
    },
  },
};
</script>

<style scoped>
.greek {
  background-image: url("https://i.ibb.co/7pRG1qz/Greek.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding-top: 12%;
}

.questionBG {
  width: 30%;
  border-radius: 5%;
  padding: 2%;
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .greek {
    padding-top: 70%;
  }
  .questionBG {
    padding: 5%;
    width: auto;
  }
}

.question {
  color: rgb(0, 0, 0);
}
</style>
