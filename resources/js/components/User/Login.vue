<template>
<div>

  <div class="pt-4 pb-3">

    <h5 style="font-size: 20px;" class="text-center mt-1 mb-4">Sign In</h5>
    <div class="col-sm-12 col-md-6 form-container">
    <form @submit.prevent="checkForm" id="formLogin" action="/">
     <p v-if="errors.length > 0" class="mb-2">
    <b>Please correct the following error(s):</b>
    <ul class="alert alert-danger">
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p> 
      <div v-if="result!=''" class="alert alert-success">
        {{ result }}
      </div>
      <div class="md-form md-outline mb-4" style="font-size: 20px;">
        <input type="email" v-model="email" name="email" id="defaultForm-email1" placeholder="Your email" class="form-control">
      </div>
      <div class="md-form md-outline mb-4" style="font-size: 20px;">
        <input type="password" v-model="password" name="password" id="defaultForm-pass1" placeholder="Your password" class="form-control">
      </div>
         <button style="width: 100%" type="submit" class="btn btn-primary mb-4">Sign in</button>
    </form>

    <div class="d-flex justify-content-between align-items-center mb-2" style="font-size: 20px;">

      <div class="form-check mb-3" style="font-size: 20px;">
        <input type="checkbox" class="form-check-input filled-in" id="new">
        <label class="form-check-label small text-uppercase card-link-secondary" for="new">Remember me</label>
      </div>

      <p><a href="">Forgot password?</a></p>

    </div>
 </div>

    <div class="text-center pb-2" style="font-size: 20px;">

      <p>Not a member? <a href="">Register</a></p>

      <p>or sign in with:</p>

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

    </div>

  </div>

</div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
	
	export default {
		name: "Login",
		computed: { 
			...mapGetters(["errors" , "result"]) 
	   },
		data() {
			return {
         email: '',
         password: ''
       }
     },
       methods:{
    checkForm: function (e) {
    	this.init();
      if (!this.password) {
        this.errors.push("password required.");
      }
      if (!this.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.');
      }

      if (!this.errors.length) {
            var obj= { 
                email: this.email,
                password: this.password 
              };
      	     this.login(obj);
      	     this.init();
         }
             e.preventDefault();
       },
      validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
       },
       ...mapActions(["login" , "init"])
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
   width: 600px;
   margin-left: 23rem;
}
	
</style>