<template>
  <section>
    <br />
    <h1 class="display-2 multicolortext">Meet Our Best Agents</h1>
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://i.ibb.co/L8q6TYX/Calla.jpg"
          alt="avatar"
        />
        <h1 class="card-fullname">Shadow</h1>
        <h2 class="card-jobtitle">Covert Surveillance</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                With a background in military intelligence, Shadow has a keen
                eye for detail and unmatched expertise in covert surveillance
                techniques. She ensures that every operation remains discreet
                and undetected. Some say Shadow can disappear into thin air,
                leaving no trace behind.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Nightshade</div>
                  <div class="card-item-desc">
                    Infiltration of a terrorist cell to prevent a high-profile
                    assassination attempt on a government official.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Blackout</div>
                  <div class="card-item-desc">
                    Extraction of a kidnapped diplomat from a hostile region
                    without alerting local authorities.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Silent Storm</div>
                  <div class="card-item-desc">
                    Disruption of an enemy intelligence network to thwart a
                    cyber attack on critical infrastructure.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Ghostwalk</div>
                  <div class="card-item-desc">
                    Recovery of stolen nuclear launch codes from a rogue state,
                    preventing a potential nuclear crisis.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  shadow@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="avatar"
        />
        <h1 class="card-fullname">Cipher</h1>
        <h2 class="card-jobtitle">Cryptographic Communications</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                Cipher is a master cryptographer with years of experience in
                secure communication protocols. Her expertise ensures that
                sensitive information remains encrypted and inaccessible to
                unauthorized parties. It is said that Cipher's mind works like a
                living encryption machine, capable of encoding and decoding
                messages with lightning speed.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Ironclad</div>
                  <div class="card-item-desc">
                    Development of an unbreakable encryption algorithm for
                    securing classified military communications.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Firewall</div>
                  <div class="card-item-desc">
                    Breach investigation and remediation of a corporate
                    espionage incident targeting a Fortune 500 company.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Safe Haven</div>
                  <div class="card-item-desc">
                    Design and implementation of a secure communication network
                    for a high-profile government agency.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Cyber Shield</div>
                  <div class="card-item-desc">
                    Counteraction against a sophisticated cyber attack targeting
                    national defense systems.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  cipher@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://i.ibb.co/7GMmG2j/Unity.jpg"
          alt="avatar"
        />
        <h1 class="card-fullname">Ghost</h1>
        <h2 class="card-jobtitle">Undercover Operations</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                Ghost is a skilled undercover operative with a talent for
                blending seamlessly into any environment. His ability to gather
                intelligence covertly makes him an invaluable asset in sensitive
                operations. Legend has it that Ghost can walk through walls,
                making him impossible to capture or detect in any environment.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Phantom</div>
                  <div class="card-item-desc">
                    Infiltration of an enemy stronghold to gather intelligence
                    on an impending terrorist threat.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Mirage</div>
                  <div class="card-item-desc">
                    Extraction of a defected enemy agent from deep within
                    hostile territory.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Shadowplay</div>
                  <div class="card-item-desc">
                    Covert surveillance operation to uncover a double agent
                    within a government agency.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Spectre</div>
                  <div class="card-item-desc">
                    Disruption of an international arms smuggling ring operating
                    in conflict zones.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  ghost@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="avatar"
        />
        <h1 class="card-fullname">Phantom</h1>
        <h2 class="card-jobtitle">Intelligence Gathering</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                Phantom possesses a wealth of knowledge in intelligence,
                analysis and information gathering techniques. His strategic
                insights and analytical skills help uncover critical
                intelligence for decision-making. Rumor has it that Phantom can
                see into the future, predicting enemy movements and foiling
                their plans before they even unfold.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Vanguard</div>
                  <div class="card-item-desc">
                    Analysis and dissemination of critical intelligence leading
                    to the capture of a high-ranking enemy commander.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Sentinel</div>
                  <div class="card-item-desc">
                    Identification and neutralization of a terrorist cell
                    planning a series of coordinated attacks.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Overwatch</div>
                  <div class="card-item-desc">
                    Surveillance and reconnaissance mission to uncover illicit
                    weapons trafficking across international borders.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Reconnaissance</div>
                  <div class="card-item-desc">
                    Infiltration and sabotage of enemy supply lines in
                    preparation for a major military offensive.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  phantom@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://i.ibb.co/r6djJ8j/Damon.jpg"
          alt="avatar"
        />
        <h1 class="card-fullname">Codebreaker</h1>
        <h2 class="card-jobtitle">Cyber Espionage</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                Codebreaker is a cybersecurity expert specializing in cyber
                espionage and digital infiltration. With advanced knowledge of
                cyber threats and vulnerabilities, he safeguards client's
                digital assets from malicious actors. Some say Codebreaker can
                hack into the fabric of reality itself, bending digital
                landscapes to their will.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Firewall</div>
                  <div class="card-item-desc">
                    Investigation and neutralization of a state-sponsored cyber
                    attack targeting government infrastructure.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Cryptic Shield</div>
                  <div class="card-item-desc">
                    Penetration testing and vulnerability assessment of critical
                    financial institutions to prevent data breaches.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Digital Fortress</div>
                  <div class="card-item-desc">
                    Cyber espionage operation to gather intelligence on foreign
                    adversaries' military capabilities.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Cyber Sentinel</div>
                  <div class="card-item-desc">
                    Defense against a coordinated cyber attack on national power
                    grids and telecommunications networks.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  codebreaker@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://i.ibb.co/2tZ0h4Q/Matthew.png"
          alt="avatar"
        />
        <h1 class="card-fullname">The Transporter</h1>
        <h2 class="card-jobtitle">Discreet Package Delivery</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                The Transporter is responsible for discreet package delivery,
                ensuring that sensitive materials reach their destination
                securely and on time. His meticulous attention to detail and
                reliability make him a trusted courier. It is rumoured that The
                Transporter can teleport instantaneously, making him the fastest
                courier in the world.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Swift Delivery</div>
                  <div class="card-item-desc">
                    Secure transport of classified documents across hostile
                    territory, ensuring their safe delivery to a secure
                    facility.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Silent Courier</div>
                  <div class="card-item-desc">
                    Extraction of a high-value asset from a dangerous conflict
                    zone under heavy enemy surveillance.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Shadow Transport</div>
                  <div class="card-item-desc">
                    Covert logistics support for a special operations team
                    conducting a sensitive hostage rescue operation.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Phantom Cargo</div>
                  <div class="card-item-desc">
                    Delivery of essential medical supplies to remote regions
                    during a global pandemic, navigating through restricted
                    airspace and maritime routes.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  thetransporter@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="avatar"
        />
        <h1 class="card-fullname">Mirage</h1>
        <h2 class="card-jobtitle">Identity Redirection</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                Mirage is widely regarded as the foremost expert in identity
                redirection and persona management, with a track record of
                successfully navigating clients through the most sensitive
                situations with unparalleled skill and finesse. Some say Mirage
                can bend reality itself, creating illusions to deceive even the
                most discerning observers.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Chameleon</div>
                  <div class="card-item-desc">
                    Creation and maintenance of multiple false identities to
                    infiltrate an international criminal syndicate.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Veil</div>
                  <div class="card-item-desc">
                    Persona management and disguise operation to extract a
                    valuable intelligence asset from a hostile environment.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Illusion</div>
                  <div class="card-item-desc">
                    Identity redirection and misinformation campaign to mislead
                    enemy operatives and disrupt their operations.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Phantom Cargo</div>
                  <div class="card-item-desc">
                    Coordinated effort to establish a network of covert
                    operatives within enemy ranks, gathering intelligence on
                    their movements and intentions.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  mirage@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt="avatar"
        />
        <h1 class="card-fullname">Guardian</h1>
        <h2 class="card-jobtitle">Secure Document Handling</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                Guardian is the foremost authority in secure document handling
                and archival procedures, trusted by governments and corporations
                alike to safeguard their most sensitive information with
                unwavering dedication and precision. Rumor has it that Guardian
                possesses a secret vault hidden deep beneath the earth's
                surface, containing the most sensitive documents known to
                humanity, protected by an impenetrable force field.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Citadel</div>
                  <div class="card-item-desc">
                    Establishment and maintenance of secure document
                    repositories for sensitive government agencies.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Sentinel Vault</div>
                  <div class="card-item-desc">
                    Protection and secure transport of classified materials
                    during a high-level diplomatic summit.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Fortress Archive</div>
                  <div class="card-item-desc">
                    Defense against a cyber attack targeting archival databases
                    containing historical intelligence records.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Iron Vault</div>
                  <div class="card-item-desc">
                    Safekeeping and retrieval of critical documents during a
                    national emergency, ensuring continuity of government
                    operations.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  guardian@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://i.ibb.co/C2NMK3H/Ammara.jpg"
          alt="avatar"
        />
        <h1 class="card-fullname">The Mentor</h1>
        <h2 class="card-jobtitle">Counterintelligence Training</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                The Mentor is revered for her unparalleled expertise in
                providing comprehensive counterintelligence training to clients,
                equipping them with the skills and knowledge to detect and
                mitigate security threats effectively. Her tailored training
                programs have elevated the security posture of numerous
                organizations to unmatched levels. It is whispered that The
                Mentor possesses a secret library containing ancient texts on
                espionage techniques, passed down through generations of master
                spies.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Insight</div>
                  <div class="card-item-desc">
                    Conducted an extensive security audit for a multinational
                    corporation, identifying and patching numerous
                    vulnerabilities in their digital infrastructure, preventing
                    a data breach.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Vigilance</div>
                  <div class="card-item-desc">
                    Trained a government task force in counterespionage
                    techniques, leading to the apprehension of a foreign spy
                    ring operating within national borders.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Shield</div>
                  <div class="card-item-desc">
                    Provided specialized security training to diplomatic
                    personnel, enabling them to detect and evade surveillance by
                    hostile intelligence agencies during sensitive negotiations.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Resilience</div>
                  <div class="card-item-desc">
                    Implemented a crisis management protocol for a high-profile
                    celebrity, ensuring they could effectively respond to and
                    recover from potential threats to their personal safety and
                    reputation.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  thementor@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
    <div class="card" :data-state="currentState">
      <div class="card-header">
        <div
          class="card-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80');
          "
        ></div>
        <img
          class="card-avatar"
          src="https://i.ibb.co/smQHq6f/Jodie.jpg"
          alt="avatar"
        />
        <h1 class="card-fullname">Apex</h1>
        <h2 class="card-jobtitle">Personal Protection Detail</h2>
      </div>
      <div class="card-main">
        <div
          v-for="section in sections"
          :key="section.id"
          :class="{
            'card-section': true,
            'is-active': section.id === currentState,
          }"
        >
          <div class="card-content">
            <div class="card-subtitle">{{ section.title }}</div>
            <template v-if="section.id === '#about'">
              <p class="card-desc">
                Apex is renowned as a highly trained security specialist with
                expertise in personal protection and threat assessment. He has
                earned a reputation for ensuring the safety and security of
                clients in even the most high-risk environments, making him the
                ultimate choice for those seeking uncompromising protection. It
                is rumored that Apex possesses enhanced reflexes and heightened
                senses, granting him an almost supernatural ability to
                anticipate and neutralize threats before they manifest.
              </p>
            </template>
            <template v-else-if="section.id === '#experience'">
              <div class="card-timeline">
                <div class="card-item" data-year="2014">
                  <div class="card-item-title">Operation Shield</div>
                  <div class="card-item-desc">
                    Protection of a high-profile political figure during a
                    diplomatic visit to a volatile region, averting a potential
                    assassination attempt.
                  </div>
                </div>
                <div class="card-item" data-year="2016">
                  <div class="card-item-title">Operation Sentinel</div>
                  <div class="card-item-desc">
                    Security detail for a high-value asset in a conflict zone,
                    successfully repelling multiple coordinated attacks by
                    hostile forces.
                  </div>
                </div>
                <div class="card-item" data-year="2018">
                  <div class="card-item-title">Operation Fortress</div>
                  <div class="card-item-desc">
                    Establishment of a secure perimeter around a classified
                    research facility, thwarting attempts by enemy agents to
                    infiltrate and sabotage the site.
                  </div>
                </div>
                <div class="card-item" data-year="2020">
                  <div class="card-item-title">Operation Resilience</div>
                  <div class="card-item-desc">
                    Rapid response to a terrorist threat at a major
                    international event, ensuring the safety of attendees and
                    preventing mass casualties.
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="card-contact-wrapper">
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  The Underworld
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    />
                  </svg>
                  We'll find you
                </div>
                <div class="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  apex@gmail.com
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="card-buttons">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="handleButtonClick(section.id)"
          :class="{ 'is-active': section.id === currentState }"
        >
          {{ section.title }}
        </button>
      </div>
    </div>
    <br />
    <br />
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentState: "#about",
      sections: [
        { id: "#about", title: "ABOUT" },
        { id: "#experience", title: "EXPERIENCE" },
        { id: "#contact", title: "CONTACT" },
      ],
    };
  },
  methods: {
    handleButtonClick(sectionId) {
      this.currentState = sectionId;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500|Jost:400,500,600&display=swap");

* {
  box-sizing: border-box;
}

.multicolortext {
  background-image: linear-gradient(
    to left,
    #555859,
    #27c8c8,
    #555859,
    #27c8c8,
    #555859,
    #27c8c8,
    #555859,
    #27c8c8,
    #555859,
    #27c8c8,
    #555859,
    #27c8c8
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
}

.card {
  max-width: 340px;
  margin: auto;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.2);
}

.card[data-state="#about"] {
  height: 450px;

  .card-main {
    padding-top: 0;
  }
}

.card[data-state="#contact"] {
  height: 430px;
}

.card[data-state="#experience"] {
  height: 550px;
}

.card.is-active {
  .card-header {
    height: 80px;
  }

  .card-cover {
    height: 100px;
    top: -50px;
  }

  .card-avatar {
    transform: none;
    left: 20px;
    width: 50px;
    height: 50px;
    bottom: 10px;
  }

  .card-fullname,
  .card-jobtitle {
    left: 86px;
    transform: none;
  }

  .card-fullname {
    bottom: 18px;
    font-size: 19px;
  }

  .card-jobtitle {
    bottom: 16px;
    letter-spacing: 1px;
    font-size: 10px;
  }
}

.card-header {
  position: relative;
  display: flex;
  height: 200px;
  flex-shrink: 0;
  width: 100%;
  transition: 0.3s;

  * {
    transition: 0.3s;
  }
}

.card-cover {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 160px;
  top: -20%;
  left: 0;
  will-change: top;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  transform: scale(1.2);
  transition: 0.5s;
}

.card-avatar {
  width: 100px;
  height: 100px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-64px);
}

.card-fullname {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  transform: translateY(-10px) translateX(-50%);
  left: 50%;
}

.card-jobtitle {
  position: absolute;
  bottom: 0;
  font-size: 11px;
  white-space: nowrap;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-7px);
}

.card-main {
  position: relative;
  flex: 1;
  display: flex;
  padding-top: 10px;
  flex-direction: column;
}

.card-subtitle {
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 8px;
}

.card-content {
  padding: 20px;
}

.card-desc {
  line-height: 1.6;
  color: #636b6f;
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
}

.card-social {
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 30px;

  svg {
    fill: rgb(165, 181, 206);
    width: 16px;
    display: block;
    transition: 0.3s;
  }

  a {
    color: #8797a1;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    background-color: rgba(93, 133, 193, 0.05);
    border-radius: 50%;
    margin-right: 10px;

    &:hover {
      svg {
        fill: darken(rgb(165, 181, 206), 20%);
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.card-buttons {
  display: flex;
  background-color: #fff;
  margin-top: auto;
  position: sticky;
  bottom: 0;
  left: 0;

  button {
    flex: 1 1 auto;
    user-select: none;
    background: 0;
    font-size: 13px;
    border: 0;
    padding: 15px 5px;
    cursor: pointer;
    color: #5c5c6d;
    transition: 0.3s;
    font-family: "Jost", sans-serif;
    font-weight: 500;
    outline: 0;
    border-bottom: 3px solid transparent;

    &.is-active,
    &:hover {
      color: #2b2c48;
      border-bottom: 3px solid #8a84ff;
      background: linear-gradient(
        to bottom,
        rgba(127, 199, 231, 0) 0%,
        rgba(207, 204, 255, 0.2) 44%,
        rgba(211, 226, 255, 0.4) 100%
      );
    }
  }
}

.card-section {
  display: none;

  &.is-active {
    display: block;
    animation: fadeIn 0.6s both;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translatey(40px);
  }

  100% {
    opacity: 1;
  }
}

.card-timeline {
  margin-top: 30px;
  position: relative;

  &:after {
    background: linear-gradient(
      to top,
      rgba(134, 214, 243, 0) 0%,
      rgba(81, 106, 204, 1) 100%
    );
    content: "";
    left: 42px;
    width: 2px;
    top: 0;
    height: 100%;
    position: absolute;
    content: "";
  }
}

.card-item {
  position: relative;
  padding-left: 60px;
  padding-right: 20px;
  padding-bottom: 30px;
  z-index: 1;

  &:last-child {
    padding-bottom: 5px;
  }

  &:after {
    content: attr(data-year);
    width: 10px;
    position: absolute;
    top: 0;
    left: 37px;
    width: 8px;
    height: 8px;
    line-height: 0.6;
    border: 2px solid #fff;
    font-size: 11px;
    text-indent: -35px;
    border-radius: 50%;
    color: rgba(#868686, 0.7);
    background: linear-gradient(
      to bottom,
      lighten(#516acc, 20%) 0%,
      #516acc 100%
    );
  }
}

.card-item-title {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}

.card-item-desc {
  font-size: 13px;
  color: #6f6f7b;
  line-height: 1.5;
  font-family: "DM Sans", sans-serif;
}

.card-contact-wrapper {
  margin-top: 20px;
}

.card-contact {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #6f6f7b;
  font-family: "DM Sans", sans-serif;
  line-height: 1.6;
  cursor: pointer;

  & + & {
    margin-top: 16px;
  }

  svg {
    flex-shrink: 0;
    width: 30px;
    min-height: 34px;
    margin-right: 12px;
    transition: 0.3s;
    padding-right: 12px;
    border-right: 1px solid #dfe2ec;
  }
}

span {
  max-width: calc(100% - 30px);
  /* Adjust the max-width as needed */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-me {
  border: 0;
  outline: none;
  background: linear-gradient(
    to right,
    rgba(83, 200, 239, 0.8) 0%,
    rgba(81, 106, 204, 0.8) 96%
  );
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  color: #fff;
  padding: 12px 16px;
  width: 100%;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: "Jost", sans-serif;
  transition: 0.3s;
}
</style>
