<template>
  <body>
    <NavBar />
    <div class="form">
      <div class="form-header">
        <div class="title">Log In</div>
      </div>
      <div v-show="error_message" class="error-message-show">
        • Invalid username and password.
      </div>
      <div class="form-body">
        <ul>
          <li>
            <input
              v-model="email"
              type="email"
              id=""
              name=""
              autofocus=""
              autocapitalize="none"
              required=""
              placeholder="Email"
              maxlength="20"
            />
          </li>
          <li>
            <input
              v-model="password"
              :type="eye ? open_eye_pass : close_eye_pass"
              name=""
              required=""
              placeholder="Password"
              maxlength="20"
            />
            <i
              @click="eye = !eye"
              :class="eye ? close_eye : open_eye"
              id="togglePassword"
            ></i>
          </li>
          <li>
            <button @click="showInput()" type="">LOG IN</button>
          </li>
          <div class="password-forgot">
            <a href="#">Forgot Password?</a>
          </div>
          <li>
            <hr />
            <div class="items">
              <a href="#">
                <div class="item">
                  <img
                    src="https://outandaboutnow.com/wp-content/uploads/2021/01/f_logo_RGB-Hex-Blue_512.png"
                    alt="facebook"
                  />
                  Facebook
                </div>
              </a>
              <a href="#">
                <div class="item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
                    alt="facebook"
                  />
                  Google
                </div>
              </a>
              <a href="#">
                <div class="item">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png"
                    alt="facebook"
                  />
                  Apple
                </div>
              </a>
            </div>
          </li>
          <li>
            New User?
            <router-link :to="'/register'">
              <b>Sign Up</b>
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
import { persons } from "../api/PersonList.js";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: {
    NavBar,
    Footer,
  },

  setup() {
    const router = useRouter();
    let USERS = persons;
    var error_message = ref(false);

    var eye = ref(true);
    var open_eye = ref("far fa-eye");
    var close_eye = ref("far fa-eye-slash");
    var open_eye_pass = ref("password");
    var close_eye_pass = ref("text");

    var email = ref(null);
    var password = ref(null);

    function showInput() {
      if (
        USERS.find((s) => s.EMAIL === email.value) &&
        USERS.find((s) => s.PASSWORD === password.value)
      ) {
        error_message.value = false;
        router.push({ path: "/admin" });
      } else {
        error_message.value = true;
      }
    }

    return {
      eye,
      open_eye,
      close_eye,
      open_eye_pass,
      close_eye_pass,
      USERS,
      error_message,
      email,
      password,
      showInput,
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
  margin: 0 auto;
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

.error-message-show {
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

.form-body input {
  width: 96.5%;
  height: 20px;
  padding: 6px;
  border: 0.5px solid rgb(204, 204, 204);
}

#togglePassword {
  position: absolute;
  margin-left: -40px;
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

.form-body .password-forgot {
  float: left;
}

.form-body .items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
}

.form-body .items a {
  border: 0.5px solid rgb(204, 204, 204);
  border-radius: 3px;
  padding: 5px;
}

.form-body .items .item {
  display: inline-flex;
  padding-top: 5px;
}

.form-body a img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.form-body hr {
  margin-top: 40px;
  margin-bottom: 25px;
}

.form-body button:hover {
  background-color: gray;
  cursor: pointer;
}

.form-body .items a:hover {
  background-color: rgb(245, 245, 245);
}
</style>
