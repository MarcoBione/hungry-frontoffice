<template>
    <footer class="d-flex _debug">

        <div class="w-50">
            <!-- logo sx -->
            <div class="_debug _mypos">
                <img class="_mylogo" src="/images/Logo.png" alt="Hungry-logo">
            </div>
        </div>

        <div class="w-50">
            <!-- sezione sx -->
            <div class="_debug _mylist d-flex align-items-center justify-content-around px-3 w-100">
                <!-- lista sx -->
                <ul class="m-0 px-1">

                    <!-- tab title -->
                    <li class="list-unstyled m-0 fw-bold">
                        Servizio clienti
                    </li>

                    <!-- Lista di links -->
                    <li class="list-unstyled m-0">
                        <a href="#">Domande frequenti</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="#">Accedi</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="#">Registrati</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="#">Scarica l'app</a>
                    </li>
                </ul>
                <!-- lista dx -->
                <ul class="m-0 px-1">

                    <!-- tab title -->
                    <li class="list-unstyled m-0 fw-bold">
                        Chi siamo
                    </li>

                    <!-- Lista di links -->
                    <li class="list-unstyled m-0">
                        <a href="#">Info su "Hungry?"</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="#">Termini e condizioni</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="#">Informativa sulla privacy</a>
                    </li>
                    <li class="list-unstyled m-0">
                        <a href="#">Cookie Policy</a>
                    </li>
                </ul>

            </div>
        </div>
            
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@use '../../assets/partials/variables' as*;

// dimensione logo
._mylogo{
    width: 300px;
}
._mypos{
    position: absolute;
    bottom: -110px;
    left: -120px;
}

._mylist{
    
}

footer{
    position: relative;
}

//rimozione dello stile di default per i links + hover
a{
    text-decoration: none;
    color: $carbon;
}

a:hover{
    transition: color 0.3s;
    color: $orange;
}
</style>