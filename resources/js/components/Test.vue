<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component 2</div>

                    <div class="card-body">
                            {{ msg }} <span> {{ data }} {{ data2 }}  </span> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name : 'Test',
        props: {
            msg: String,
            id: String
        },
        data() {
             return {
                data: window.data,
                data2: window.data2
             }    
        }
    }

</script>
