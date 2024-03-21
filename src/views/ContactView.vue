<template>
  <section id="contact">
    <!-- <h1 class="display-2">This is the contact page</h1> -->
    <div class="contact-box">
      <div class="contact-links bg-black">
        <h2>CONTACT</h2>
        <div class="links">
          <div class="link">
            <a
              ><img src="https://i.ibb.co/HNT8gMM/linkedIn.png" alt="linkedin"
            /></a>
          </div>
          <div class="link">
            <a
              ><img src="https://i.ibb.co/4gFBL72/Github.jpg" alt="github"
            /></a>
          </div>
          <div class="link">
            <a
              ><img
                src="https://i.ibb.co/48x5zmT/Instagram-part1.webp"
                alt="instagram"
            /></a>
          </div>
          <div class="link">
            <a><img src="https://i.ibb.co/G2yW7zr/Email.jpg" alt="email" /></a>
          </div>
        </div>
      </div>
      <div class="contact-form-wrapper">
        <form action="https://formspree.io/f/mwkgnwwy" method="POST">
          <div class="form-item">
            <input type="text" name="sender" required />
            <label>Name:</label>
          </div>
          <div class="form-item">
            <input type="text" name="email" required />
            <label>Email:</label>
          </div>
          <div class="form-item">
            <textarea class="" name="message" required></textarea>
            <label>Message:</label>
          </div>
          <button class="submit-btn">Send</button>
        </form>
      </div>
    </div>
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");

* {
  margin: 0;
  box-sizing: border-box;
}

#contact {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.contact-box {
  width: clamp(100px, 90%, 1000px);
  margin: 80px 50px;
  display: flex;
  flex-wrap: wrap;
}

.contact-links,
.contact-form-wrapper {
  width: 50%;
  padding: 8% 5% 10% 5%;
  z-index: 2;
}

.contact-links {
  background-color: #000000;
  background: radial-gradient(
      circle at 55% 92%,
      #484949 0 12%,
      transparent 12.2%
    ),
    radial-gradient(circle at 94% 72%, #484949 0 10%, transparent 10.2%),
    radial-gradient(
      circle at 20% max(78%, 350px),
      #181819 0 7%,
      transparent 7.2%
    ),
    radial-gradient(circle at 0% 0%, #181819 0 40%, transparent 40.2%), #1f2e43;
  border-radius: 10px 0 0 10px;
}

.contact-form-wrapper {
  background-color: #18c8e348;
  border-radius: 0 10px 10px 0;
  z-index: 2;
}

@media only screen and (max-width: 800px) {
  .contact-links,
  .contact-form-wrapper {
    width: 100%;
  }

  .contact-links {
    border-radius: 10px 10px 0 0;
  }

  .contact-form-wrapper {
    border-radius: 0 0 10px 10px;
  }
}

@media only screen and (max-width: 400px) {
  .contact-box {
    width: 95%;
    margin: 8% 5%;
  }
}

h2 {
  font-family: "Arimo", sans-serif;
  color: #18c8e3;
  font-size: clamp(30px, 6vw, 60px);
  letter-spacing: 2px;
  text-align: center;
  transform: scale(0.95, 1);
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  z-index: 2;
}

.link {
  margin: 10px;
  cursor: pointer;
}

img {
  width: 45px;
  height: 45px;
  filter: hue-rotate(220deg) drop-shadow(2px 4px 4px #0006);
  transition: 0.2s;
  user-select: none;
}

img:hover {
  transform: scale(1.1, 1.1);
}

img:active {
  transform: scale(1.1, 1.1);
  filter: hue-rotate(220deg) drop-shadow(2px 4px 4px #222) sepia(0.3);
}

.form-item {
  position: relative;
}

label,
input,
textarea {
  font-family: "Poppins", sans-serif;
}

label {
  position: absolute;
  top: 10px;
  left: 2%;
  color: #999;
  font-size: clamp(14px, 1.5vw, 18px);
  pointer-events: none;
  user-select: none;
}

input,
textarea {
  width: 100%;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 12px;
  font-size: clamp(15px, 1.5vw, 18px);
}

input:focus + label,
input:valid + label,
textarea:focus + label,
textarea:valid + label {
  font-size: clamp(13px, 1.3vw, 16px);
  color: #18c8e3;
  top: -23px;
  transition: all 0.225s ease;
}

.submit-btn {
  background-color: #fd917e;
  filter: drop-shadow(2px 2px 3px #0003);
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: clamp(16px, 1.6vw, 18px);
  display: block;
  padding: 12px 20px;
  margin: 2px auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
}

.submit-btn:hover {
  transform: scale(1.1, 1.1);
}

.submit-btn:active {
  transform: scale(1.1, 1.1);
  filter: sepia(0.5);
}

@media only screen and (max-width: 800px) {
  h2 {
    font-size: clamp(40px, 10vw, 60px);
  }
}

@media only screen and (max-width: 400px) {
  h2 {
    font-size: clamp(30px, 12vw, 60px);
  }

  .links {
    padding-top: 30px;
  }

  img {
    width: 38px;
    height: 38px;
  }
}

section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262626;
  min-height: 100vh;
  overflow: hidden;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}

@media (max-width: 750px) {
  .content {
    flex-direction: column-reverse;
  }

  .btn {
    margin: 10px auto 40px;
  }
}
</style>
