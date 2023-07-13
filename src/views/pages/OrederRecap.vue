<template>
    <div class="pt-4 container d-flex flex-column align-items-center justify-content-center gap-4 my-5">

        <h1 class="d-flex gap-3">
            <i class="fa-solid fa-basket-shopping"></i>
            <span>Ordine 5</span>
        </h1>

        <div class="d-flex gap-4 bg-dark text-light p-4 rounded-4 text-center align-items-start">
            <div class="d-flex flex-column align-items-center">
                <p class="fw-bold fs-5">Creazione</p>
                <p>2023-07-06 09:27:17</p>
            </div>
            <div class="d-flex flex-column align-items-center">
                <p class="fw-bold fs-5">Ultimo aggiornamento</p>
                <p>2023-07-06 09:27:17</p>
            </div>
            <div class="d-flex flex-column align-items-center">
                <p class="fw-bold fs-5">Stato</p>
                <p>Consegnato</p>
            </div>
        </div>

        <div class="d-flex p-4 justify-content-center align-items-start gap-4 flex-wrap">

            <div class="col-xl-6 col-lg-5 col-12 d-flex flex-column align-items-center">

                <div class="d-flex flex-column gap-3 justify-content-start border rounded-4 p-4">

                    <div class="d-flex gap-4">
                        <span class="fs-5 fw-bold mb-2">Siamo spiacenti, questo ordine non ha piatti associati quindi non è
                            possibile mostrare le informazioni del ristorante dal quale si sta effettuando l'ordine!</span>
                    </div>
                    <hr>

                    <div class="d-flex flex-column gap-2">
                        <span class="fs-5 fw-bold">Riepilogo dell'ordine</span>
                        <div class="d-flex gap-4 flex-column align-items-start">
                            <span>Nessun piatto è stato prenotato</span>
                        </div>
                    </div>
                    <hr>

                    <div class="d-flex justify-content-between align-items-center gap-4 fs-5 fw-bold">
                        <span>Totale pagato con PayPal</span>
                        <span>17.50€</span>
                    </div>
                </div>
            </div>

            <div class="col-xl-5 col-lg-4 col-12 d-flex flex-column gap-4">

                <div class="d-flex gap-4 align-items-start border rounded-4 p-4">
                    <i class="fa-solid fa-location-dot fs-3"></i>
                    <div class="d-flex flex-column align-items-start justify-content-start">
                        <span class="fs-5 fw-bold mb-2">Indirizzo di consegna</span>
                        <div class="d-flex flex-column align-items-start">
                            <span>Marika Di Blasio</span>
                            <span>Via K.Adenauer, 3</span>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-4 align-items-start border rounded-4 p-4">
                    <i class="fa-regular fa-message fs-3"></i>
                    <div class="d-flex flex-column align-items-start justify-content-start">
                        <span class="fs-5 fw-bold mb-2">Le note di Marika Di Blasio</span>
                        <div class="d-flex flex-column align-items-start">
                            <span>Non ha lasciato nessuna nota</span>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-4 align-items-start border rounded-4 p-4">
                    <i class="fa-solid fa-phone fs-3"></i>
                    <div class="d-flex flex-column align-items-start justify-content-start">
                        <span class="fs-5 fw-bold mb-2">Numero di telefono</span>
                        <div class="d-flex flex-column align-items-start">
                            <span>+39 2468135790</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>