<template>
  <footer>
    <div class="footer-head">
      <div class="brands">
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-youtube"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
    <div class="footer-body">
      <div class="content">
        <div class="about">
          <h3>ABOUT NIKKE</h3>
          <p>
            Our mission is what drives us to do everything possible to expand
            human potential. We do that by creating groundbreaking sport
            innovations, by making our products more sustainably, by building a
            creative and diverse global team and by making a positive impact in
            communities where we live and work.
          </p>
        </div>
      </div>

      <div class="content">
        <h3>PRODUCTS</h3>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Sales</a>
        <a href="#">SNKRS</a>
      </div>

      <div class="content">
        <h3>CONTACT US</h3>
        <a href="#"
          ><i class="fa-solid fa-building"></i> New York, NY 10012, US</a
        >
        <a href="#"><i class="fa-solid fa-envelope"></i>sample@example.com</a>
        <a href="#"><i class="fa-solid fa-phone"></i>+01 235 456 78</a>
      </div>

      <div class="content">
        <h3>MESSAGE US</h3>
        <form>
          <input type="text" name="email" id="emailAdd" placeholder="Email" />
          <textarea
            type="text"
            id="emailMessage"
            name="message"
            placeholder="Message"
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy;Sample Website ONLY</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;

  list-style: none;
  font-family: "Open Sans", sans-serif;
}

footer {
  width: 100%;
}

footer .footer-head {
  overflow: hidden;
  background-color: black;
  padding: 10px;
}

footer .footer-head .brands {
  float: right;
  margin-right: 25px;
}

footer .footer-head .brands a {
  color: gray;
  padding: 15px;
}

footer .footer-body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.5fr;
  column-gap: 100px;
  padding: 50px;
  background-color: black;
}

footer .footer-body .content {
  color: white;
  text-align: left;
  border: 1px solid black;
}

footer .footer-body .content h3 {
  margin-bottom: 30px;
}

footer .footer-body .content .about {
  text-align: left;
}

footer .footer-body .content form {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
}

footer .footer-body .content form #emailAdd,
footer .footer-body .content form #emailMessage,
footer .footer-body .content form button {
  padding: 10px;
}

footer .footer-body .content form #emailMessage {
  height: 100px;
}

footer .footer-body .content form button {
  float: right;
  width: 25%;
}

footer .footer-body .content a {
  display: block;
  color: gray;
  margin-top: 5px;
}

footer .footer-body .content a:hover,
footer .footer-head .brands a:hover {
  color: white;
}

footer .footer-body .content i {
  margin-right: 10px;
}

footer .footer-bottom {
  width: 100%;
  background-color: black;
}

footer .footer-bottom div {
  padding: 20px;
  color: white;
}
</style>
