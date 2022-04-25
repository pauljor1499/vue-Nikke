<template>
  <body>
    <NavBar />
    <div class="form">
      <div class="form-header">
        <div class="title">Sign Up</div>
      </div>
      <div
        class="error-message-show"
        v-show="
          invalid_firstname ||
          invalid_middlename ||
          invalid_lastname ||
          invalid_gender ||
          invalid_email ||
          invalid_password
        "
      >
        <span v-show="invalid_firstname">• Invalid first name.</span>
        <span v-show="invalid_middlename">• Invalid middle name.</span>
        <span v-show="invalid_lastname">• Invalid last name.</span>
        <span v-show="invalid_gender">• Invalid gender.</span>
        <span v-show="invalid_email">• Invalid email.</span>
        <span v-show="invalid_password">• Invalid password.</span>
      </div>
      <div class="form-body">
        <ul>
          <li>
            <div class="double">
              <input
                type="text"
                id="Fname"
                name=""
                autofocus=""
                autocapitalize="none"
                required=""
                placeholder="First name"
                maxlength="20"
              />
              <input
                type="text"
                id="Mname"
                name=""
                autofocus=""
                autocapitalize="none"
                required=""
                placeholder="Middle name"
                maxlength="20"
              />
            </div>
          </li>
          <li>
            <div class="double">
              <input
                type="text"
                id="Lname"
                name=""
                autofocus=""
                autocapitalize="none"
                required=""
                placeholder="Last name"
                maxlength="20"
              />
              <select name="" id="Gender">
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
              </select>
            </div>
          </li>
          <li>
            <div class="single">
              <input
                type="email"
                id="Email"
                name=""
                autofocus=""
                autocapitalize="none"
                required=""
                placeholder="Email"
                maxlength="20"
              />
            </div>
          </li>
          <li>
            <div class="single">
              <input
                :type="eye ? 'text' : 'password'"
                name=""
                required=""
                placeholder="Password"
                maxlength="20"
              />
              <i
                @click="eye = !eye"
                :class="eye ? 'far fa-eye' : 'far fa-eye-slash'"
                id="togglePassword"
              ></i>
            </div>
          </li>
          <li>
            <p>
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
          </li>
          <li>
            <button>SIGN IN</button>
          </li>
          <li>
            Already have an account?
            <router-link :to="'/login'">
              <b>Log In</b>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="form-footer"></div>
    </div>
  </body>
  <Footer />
</template>

<script>
import { ref } from "@vue/reactivity";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Login",
  components: {
    NavBar,
    Footer,
  },

  setup() {
    var eye = ref(false);

    let invalid_firstname = ref(true);
    let invalid_middlename = ref(true);
    let invalid_lastname = ref(true);
    let invalid_gender = ref(true);
    let invalid_email = ref(true);
    let invalid_password = ref(true);

    return {
      eye,
      invalid_firstname,
      invalid_middlename,
      invalid_lastname,
      invalid_gender,
      invalid_email,
      invalid_password,
    };
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

.form {
  background-color: white;
  width: 30%;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgb(207, 207, 207);
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

.form-header {
  overflow: hidden;
}

.form-header .title {
  float: left;
  font-size: 20px;
}

.error-message {
  padding: 6px;
  color: red;
  border: 0.5px solid rgb(250, 160, 160);
  background-color: rgb(255, 239, 239);
  margin-top: 25px;
  text-align: left;
}

.form-body {
  margin-bottom: 20px;
}

.form-body ul li {
  margin-top: 25px;
}

.form-body ul li input {
  height: 20px;
  padding: 6px;
  border: 0.5px solid rgb(204, 204, 204);
}

.form-body ul li select {
  border: 0.5px solid rgb(204, 204, 204);
}

.form-body ul li p {
  font-size: 12px;
}

.form-body ul li .double {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.form-body ul li .single {
  display: grid;
  grid-template-columns: 1fr;
}

.form-body ul li .double #Fname {
  margin-right: 5px;
}

.form-body ul li .double #Lname {
  margin-right: 5px;
}

#togglePassword {
  position: absolute;
  margin-left: 370px;
  margin-top: 10px;
  cursor: pointer;
}

.form-body button {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 3px;
  color: white;
  background-color: black;
}

.form-body button:hover {
  background-color: gray;
  cursor: pointer;
}

.error-message-show {
  display: grid;
  text-align: left;
  padding: 6px;
  color: red;
  background-color: rgb(255, 239, 239);
  border: 0.5px solid rgb(250, 160, 160);
  margin-top: 25px;
}
</style>
