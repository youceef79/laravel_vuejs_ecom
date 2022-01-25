<template>
  <div class='credit-card-inputs' :class='{ complete }'>
    <label for="card-number"> Credit card number </label>
    <card-number class='card-it stripe-element card-number'
      ref='cardNumber'
      :stripe='stripe'
      :options='options'
      @change='number = $event.complete'
    />
    <label for="card-expiry"> Expiry Date </label>
    <card-expiry class='card-it stripe-element card-expiry'
      ref='cardExpiry'
      :stripe='stripe'
      :options='options'
      @change='expiry = $event.complete'
    />
    <label for="cvc"> CVC </label>
    <card-cvc class='stripe-element card-cvc card-it'
      ref='cardCvc'
      :stripe='stripe'
      :options='options'
      @change='cvc = $event.complete'
    />
  </div>
</template>
 
<script>
import { CardNumber, CardExpiry, CardCvc } from 'vue-stripe-elements-plus'
 
export default {
  data () {
    return {
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      stripe: "pk_test_51IHtOdFI2MuECzUknBb7BctKNVKrjiRb9R7Ms3d1MgJaH1Lj24439Vvmzd3Mt9lEJEiqhbqOy2yBUO3XZjmofeQR00F2nvU1KR",
      options: {
         width: "100%",
         marginBottom: "20px",
         padding: "12px",
         border: "1px solid #ccc",
         borderRadius: "3px", 
      }
    }
  },
  components: { CardNumber, CardExpiry, CardCvc },
  methods: {
    update () {
      this.complete = this.number && this.expiry && this.cvc
 
      // field completed, find field to focus next
      if (this.number) {
        if (!this.expiry) {
          this.$refs.cardExpiry.focus()
        } else if (!this.cvc) {
          this.$refs.cardCvc.focus()
        }
      } else if (this.expiry) {
        if (!this.cvc) {
          this.$refs.cardCvc.focus()
        } else if (!this.number) {
          this.$refs.cardNumber.focus()
        }
      }
      // no focus magic for the CVC field as it gets complete with three
      // numbers, but can also have four
    }
  },
  watch: {
    number () { this.update() },
    expiry () { this.update() },
    cvc () { this.update() }
  }
};
</script> 
 
<style scoped>
.credit-card-inputs.complete {
  border: 2px solid green;
} 
 .card-it{
   width: "100%";
   margin-bottom: "20px";
   padding: "12px";
   border: "1px solid #ccc";
   border-radius: "3px"; 
 }
  label {
    margin-top: 20px;
  }
</style> 