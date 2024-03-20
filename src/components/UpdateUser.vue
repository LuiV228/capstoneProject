<template>
  <div>
    <br />
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#updateUserModal"
      data-bs-whatever="@getbootstrap"
    >
      Edit User
    </button>
    <div
      class="modal fade"
      id="updateUserModal"
      tabindex="-1"
      aria-labelledby="updateUserModal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content loginbg">
          <div class="modal-header">
            <br />
            <h1 class="modal-title fs-5" id="updateUserModal">
              Update User's Details
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body login-box">
            <form @submit.prevent="updateUser">
              <div class="user-box">
                <input
                  type="text"
                  name=""
                  required=""
                  v-model="userFirstName"
                />
                <label>First Name</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required="" v-model="userLastName" />
                <label>Last Name</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required="" v-model="userContact" />
                <label>Contact</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required="" v-model="userEmail" />
                <label>Email Address</label>
              </div>
              <div class="user-box">
                <input
                  type="password"
                  name=""
                  required=""
                  v-model="userPassword"
                />
                <label>Password</label>
              </div>
              <div class="user-box">
                <input type="text" name="" required="" v-model="userRole" />
                <label>Role</label>
              </div>
              <br />
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-secondary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userFirstName: "",
      userLastName: "",
      userContact: "",
      userEmail: "",
      userPassword: "",
      userRole: "",
    };
  },
  methods: {
    updateUser() {
      let update = {
        userID: this.user.userID,
        userFirstName: this.userFirstName,
        userLastName: this.userLastName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        userContact: this.userContact,
        userRole: this.userRole,
      };
      if (this.validateForm()) {
        this.$store.dispatch("updateUser", update);
      } else {
        alert("Please fill in all the fields.");
      }
    },
    validateForm() {
      return (
        this.userFirstName.trim() !== "" &&
        this.userLastName.trim() !== "" &&
        String(this.userContact).trim() !== "" &&
        this.userEmail.trim() !== "" &&
        this.userPassword.trim() !== "" &&
        this.userRole.trim() !== ""
      );
    },
  },
};
</script>

<style scoped>
#updateUserModal {
  color: #ffffff;
}

.loginbg {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
  height: 100vh;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #18c8e3;
  font-size: 12px;
}

.login-box form button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #000000;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box button:hover {
  background: #18c8e3;
  color: #000000;
  border-radius: 5px;
  box-shadow: 0 0 5px #18c8e3, 0 0 25px #18c8e3, 0 0 50px #18c8e3,
    0 0 100px #18c8e3;
}

.login-box button span {
  position: absolute;
  display: block;
}

.login-box button span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #000000);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,
  100% {
    left: 100%;
  }
}

.login-box button span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #000000);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }

  50%,
  100% {
    top: 100%;
  }
}

.login-box button span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #000000);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }

  50%,
  100% {
    right: 100%;
  }
}

.login-box button span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #000000);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }

  50%,
  100% {
    bottom: 100%;
  }
}
</style>
