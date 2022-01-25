<template>
 <!-- Card -->
<div class="form-container">

  <div class="pt-4 pb-3">

    <h5 class="text-center mt-1 mb-4">Sign Up</h5>
       <div v-if="errors!=''" v-for="err in errors" class="alert alert-danger" style="width: 100%">
            {{ err }} 
      </div>
    <form @submit.prevent="registerForm">

      <div class="form-row" style="margin-bottom: 1.5rem">
        <div class="col">
          <div class="md-form md-outline mt-0">
            <input type="text" v-model="first_name" placeholder="First name" id="materialRegisterFormFirstName" class="form-control">
          </div>
        </div>
        <div class="col">
          <div class="md-form md-outline mt-0">
            <input type="text" v-model="last_name" placeholder="Last name" id="materialRegisterFormLastName" class="form-control">
          </div>
        </div>
      </div>

      <div class="md-form md-outline mt-0" style="margin-bottom: 1.5rem">
        <input type="email" v-model="email" id="defaultForm-email2" placeholder="Your email" class="form-control">
      </div>
      <div class="md-form md-outline mt-0" style="margin-bottom: 1.5rem">
        <input type="password" v-model="password" id="defaultForm-pass2" placeholder="Your password" class="form-control">
        <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
          At least 8 characters and 1 digit
        </small>
      </div>

      <div class="md-form md-outline" style="margin-bottom: 1.5rem">
        <input type="number" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" placeholder="Phone number">
        <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-3">
          Optional - for two step authentication
        </small>
      </div>

        <button style="width:100%" type="submit" class="btn btn-primary mb-4">Sign Up</button>

    </form>

    <div class="text-center pb-2">

      <div class="form-check pl-0 mb-3">
        <input type="checkbox" class="form-check-input filled-in" id="new1">
        <label class="form-check-label small text-uppercase card-link-secondary" for="new1">Subscribe to our newsletter</label>
      </div>

    </div>

    <div class="text-center mb-2">

      <p>or sign up with:</p>

      <a type="button" class="btn-floating btn-fb btn-sm mr-1">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a type="button" class="btn-floating btn-tw btn-sm mr-1">
        <i class="fab fa-twitter"></i>
      </a>
      <a type="button" class="btn-floating btn-li btn-sm mr-1">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a type="button" class="btn-floating btn-git btn-sm">
        <i class="fab fa-github"></i>
      </a>

      <hr class="mt-4">

      <p>By clicking
        <em>Sign up</em> you agree to our
        <a href="" target="_blank">terms of service</a>
      </p>

    </div>

  </div>

</div>
<!-- Card -->

</template>

<script>
  import axios from 'axios';
  import {mapGetters} from 'vuex';
  import {mapActions} from 'vuex';
	export default {
		name: "Login",
    computed: {
      ...mapGetters(["errors"])
    },
    data() {
      return {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    },
    methods: {
         registerForm(e) {
          this.init();
          console.log("name :"+ this.first_name+' '+this.last_name);
          console.log("email :"+ this.email);
          if (!this.password) {
            this.errors.push("password required.");
          }
          if (!this.first_name) {
            this.errors.push("first name required.");
          }
          if (!this.last_name) {
            this.errors.push("last name required.");
          }
         if (!this.email) {
         this.errors.push('Email required.');
          } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.');
         }
          if (!this.errors.length) {
            var obj= { 
                name: this.first_name+' '+this.last_name,
                email: this.email,
                password: this.password 
              };
           this.register(obj);
           this.init(); 
           }
           e.preventDefault();
          //console.log("password :"+ this.password.length);
         },
         validEmail: function (email) {
         var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
         },
         ...mapActions(["register" , "init"])
    }
	};
</script>
<style>
.card {
    margin-bottom: 30px;
    border: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    letter-spacing: .5px;
    border-radius: 8px;
    -webkit-box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05);
    box-shadow: 1px 5px 24px 0 rgba(68, 102, 242, .05)
} 
.form-container {
   width: 800px;
   margin-left: 15rem;
}
	
</style>