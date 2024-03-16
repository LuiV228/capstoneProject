<template>
  <div class="access-spinner">
    <pre class="access-spinner__text">
        <!-- Text related to the spinner -->
      </pre>
  </div>
</template>

<script>
export default {
  mounted() {
    const textArray = textString.split("");
    const textElem = document.querySelector(".access-spinner__text");

    let count = 0;

    setInterval(() => {
      if (textArray[count] === "\n") {
        textElem.innerHTML += "<br>";
      } else {
        textElem.innerHTML += `<span class="access-spinner__character">${textArray[count]}</span>`;
      }

      count++;
      if (count === textArray.length) {
        count = 0;
      }
    }, 20);
    setTimeout(() => {
      this.$router.push({ name: "home" }); // Navigate to home page
    }, 22000);
  },
};

const textString = `.
.
///cqrCyber Console///
    <unknowncbs@theunderworld>:::cqrCyber
           Commence encrypting module@cqrcyber.10.10.20
           ...Connecting user...NO ANSWER
...
...
//AccessingAllData\\\\
            ://Stopcallinguser...
            (**NO AnsWER**)....
                    PLEASE ...//STOP CALLING USER...
{enter. your. Name.}/// -- \\\\Unknown\\\\
  <M> Connecting USER..:":":":
  ff

<original hacker...>
                / if
         -----sin close--
         ....admin@ADMIN or admin@cqrCyber;
                     !!!ADmin/User!!!!404
.
.
.
                        PLEASE;;'ENTER;;'PASSWORD
LOAD .       $%$%$qazWSXedcRFVtgbYHNujmIKol$%$%$%
      \\\\...User ACCEPTED your CALL...
      \\\\%^^attach{codemonkey}"'';
      ZXC..<>Ckfkd<>vkvodkskclc...
                         { VODKA3421D;CODE10011011101011
                        ( B+ Encrypting..//YOURACCESSISBEINGGRANTED )
<\\\\boeie\\\\..www.btcuserscentral.com\\\\
**(AR)12. (696); (96).ffkeoslk
             0617513060 <<<<>OKAY
             {FOntsize}:Hard.. FONTMANAGE 22 //
             ((open The Underworld)) //AGENT_FRAME;
                           (port Opened)
                                (portisnotfound)// B1 }
..
..
.....
/string found
///CheckingYourToken
....ALSOFOUNDILDO
          ///(SHUTDOWN USER)
             {WIPEDRIVEIFNOTUSER}
          wipe not found..
S1293 K // P 430
         @cqrcyber.. VERSION 10.10.20.1067
...
.....
...
....
...
...
...
..
...
.



Welcome`;
</script>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.access-spinner {
  background: #000;
  height: 100vh;
}

.access-spinner__text {
  bottom: 0;
  font-family: monospace;
  font-size: 18px;
  left: 0;
  line-height: 1.5rem;
  padding: 2rem;
  position: absolute;
  right: 0;
  text-align: left;
  color: #18c8e3;
}

.access-spinner__character {
  animation: type 500ms linear;
  color: #18c8e3;
}

@keyframes type {
  0% {
    background: #fff;
    color: #fff;
  }

  5% {
    background: transparent;
    color: #fff;
  }

  100% {
    background: transparent;
    color: #18c8e3;
  }
}
</style>
