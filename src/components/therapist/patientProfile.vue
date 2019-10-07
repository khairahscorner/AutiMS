<template>
    <div class="no-border p-0 card col-xl-8 col-md-7 mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Patient Name Details</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="editPatientProfile()"
                        >EDIT
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-6 br-1">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Patient Name</label>
                                <input type="text" :value="patient_name" class="form-control" id="name" readonly>
                            </div>
                                        <div class="form-group">
                                            <label for="age">Age</label>
                                            <input :value="patient_age" type="text" class="form-control" id="age" readonly> 
                                        </div> 
                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <input :value="gender" type="text" class="form-control" id="gender" readonly>                                             
                                        </div>
                                <div class="form-group">
                                        <label for="diagnosis">Diagnosis</label>
                                        <input :value="diagnosis" type="text" class="form-control" id="diagnosis" readonly>
                                    </div> 
                    </form>
                  </div>
                  <div class="col-6">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Parent Name</label>
                                <input :value="parent_name" type="text" class="form-control" id="parent_name" readonly>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input :value="parent_email" type="text" class="form-control" id="email" readonly>
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input :value="parent_phone" type="text" class="form-control" id="phone_no" readonly>
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <input :value="relationship" type="text" class="form-control" id="relationship" readonly>
                                        <small class="error">**Not Verified</small>
                            </div> 
                    </form>
                  </div>
                </div>
            </div>
</template>

<script>
export default {
    props: [
        'patientId'
    ],
    data() {
        return {
            patient_name: "Khairah",
            patient_age: "12",
            gender: "male",
            diagnosis: "",
            parent_name: "",
            parent_email: "",
            parent_phone: "",
            relationship: "Mother",
            verified: 'Not verified'
        }
    },
    methods: {
        editPatientProfile(id) {
            this.$emit('editProfile')
        }
    },
    mounted () {

    }
}
</script>