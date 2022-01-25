
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel {!! "" !!}</title>
         <!-- CSRF Token -->
         <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="css/app.css" rel="stylesheet">
        <script type="text/javascript">

            var products = <?= json_encode($products ?? ''); ?>;
            var categories = <?= json_encode($categories ?? ''); ?>;
            var allCategories = <?= json_encode($allCategories ?? ''); ?>;
            var imagesGalleries = <?= json_encode($imagesGalleries ?? ''); ?>;
            var detail_product =  <?= json_encode($detail_product ?? ''); ?>;
            //var csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

           /*
           if(  !sessionStorage.getItem("reload") ) {
            var products = <?= json_encode($products ?? ''); ?>;
            var categories = <?= json_encode($categories ?? ''); ?>;
            var allCategories = <?= json_encode($allCategories ?? ''); ?>;
            var imagesGalleries = <?= json_encode($imagesGalleries ?? ''); ?>;
            var detail_product =  <?= json_encode($detail_product ?? ''); ?>;
             } else {
                    var products = null;
                    var categories =  null;
                    var allCategories =  null;
                    var imagesGalleries =  null;
                    var detail_product =   null;
                    sessionStorage.removeItem("reload");
             }

             window.onbeforeunload = function(event)
                  { 
                   //event.preventDefault();
                    sessionStorage.setItem("reload" , true);    
                    alert("you're about to reload");
                  };
             */

        </script>

        <!-- Styles -->
        <style>
            html, body {

                : #fff;
                background-color: #eee;
                font-family: 'Calibri', sans-serif !important;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
                top: 0;
                left: 0;
                box-sizing: border-box;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css">
        <script src="https://js.stripe.com/v3/"></script>
    </head>
    <body>
        <script 
        src="https://www.paypal.com/sdk/js?client-id=AXpDJFxYhwj2Ya1iNFyfloAj3nDcUJMvpnbOSW2MZVvCnqOUoKBcm8Sr6KlJWxfDmNmpzG-lUmB7U2hC&currency=USD">
        </script>
        <script defer
        src="https://www.paypal.com/sdk/js?client-id=AXpDJFxYhwj2Ya1iNFyfloAj3nDcUJMvpnbOSW2MZVvCnqOUoKBcm8Sr6KlJWxfDmNmpzG-lUmB7U2hC&currency=USD">
        </script>
            <app id="app">
            </app>
        <script type="text/javascript" src="{{ mix('js/app.js') }}"> 
        </script>
    </body>
</html>
