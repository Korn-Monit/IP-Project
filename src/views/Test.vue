<template>
    <div>
        <product-one>

        </product-one>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return{
                product: [
                    {name: 'Book', price: 100},
                    {name: 'Pen', price: 10},
                ]
            }
        }
    }

</script>