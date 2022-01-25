  <template>
 <div id="paypal-button-container">
    
</div>
</template>
<script>
  import { mapGetters } from 'vuex'
export default {
    name: "paypalCard",
    mounted: function(){
      paypal.Buttons({

            // Set up the transaction
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: this.totalPrice 
                        }
                    }]
                });
            },

            // Finalize the transaction
            onApprove: (data, actions) => {
                return actions.order.capture().then(function(details) {
                    // Show a success message to the buyer
                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                });
            }


        }).render('#paypal-button-container');
    },
     computed: {
      ...mapGetters(["totalPrice"]),
     }
  }; 
</script>