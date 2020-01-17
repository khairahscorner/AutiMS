<template>
                <div class="card-body m-50">
                  <div class="text-center">
                    <div class="pb-10">
                      <img src="../assets/img/patients.svg" alt>
                    </div>
                    <p>No {{doc_type}} yet.</p>
                  </div>
                </div>
</template>

<script>
export default {
    props: ['doc_type']
}
</script>