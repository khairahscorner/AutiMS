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
                                <div>Khairah</div>
                            </div>
                                        <div class="form-group">
                                            <label for="age">Age</label>
                                            <div>12</div>
                                        </div> 
                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <div>Female</div>
                                        </div>
                                <div class="form-group">
                                        <label for="diagnosis">Diagnosis</label>
                                        <div>Autism, Seizure disorder, Intellectual Disability</div>
                                    </div> 
                    </form>
                  </div>
                  <div class="col-6">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Parent Name</label>
                                <div>Balikis Yusuff</div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <div>yusuffkby@yahoo.co.uk</div>
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <div>08012345678</div>
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <div>
                                            Mother
                                            <small class="pl-10 error">**Not Verified</small>
                                        </div>
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