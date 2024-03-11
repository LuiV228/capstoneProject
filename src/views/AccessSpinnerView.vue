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
    }, 39300); // 52000 milliseconds = 52 seconds
  },
};

const textString = `.
.
///cqrCyber Console///
    <umarcbs@hacking>:::cqrCyber
           Commence winterhacking module@cqrcyber.10.10.20
           ...Connecting Kashmir...NO ANSWER
...
...
//BornToHack&Crack\\\\
            ://StopcallingVictim...
            (**NO AnsWER**)....
                    PLEASE ...//STOP CALLING Victim...
{enter. your. Name.}/// -- \\\\Umar Farooq\\\\
  <M> Connecting Victim..:":":":
  ff

<original hacker...>
                / if
         -----sin close--
         ....hacker@hacking or admin@cqrCyber;
                     !!!HACKer/Cracker!!!!404
.
.
.
                        PLEASE;;'ENTER;;'PASSWORD
LOAD .       $%$%$qazWSXedcRFVtgbYHNujmIKol$%$%$%
      \\\\...Victim ACCEPTED your CALL...
      \\\\%^^attach{codemonkey}"'';

///
//
             /If victim has coffee [ ed happy 100% ]
               //or Hide ;
/
//
////CODEMONKEYSENGAGE...&*&&*&;
      [sd]
       {hard like Shirt}

ZXC..<>Ckfkd<>vkvodkskclc...
                         { VODKA3421D;CODE10011011101011
                        ( B+ HACKING..//YOULOSTALLYOURBITCOIN )
<\\\\boeie\\\\..www.btchackerscentral.com\\\\
**(AR)12. (696); (96).ffkeoslk
             0617513060 <<<<>OKAY
             {FOntsize}:Hard.. FONTMANAGE 22 //
             ((open duck)) //MONSTER_FRAME;
                           (port Opened)
                                (portisnotfound)// B1 }
..
..
.....
NORMALIZE CLothing ?? >> {STRING LOST}
                        BIND ERROR <<DOWNREGION EXPOSED>> ;;' /
                          0011011011101110110101101
                           -----v-----
                          (     |    )  <-----
                          /     |    \\
                         /     / \\    \\
                         |     | |    |

/string found
///BetterCheckYourDrawers
....ALSOFOUNDILDO
          ///(SHUTDOWN HACKING)
             {WHIPEDRIVE}
          whipe not found..
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
