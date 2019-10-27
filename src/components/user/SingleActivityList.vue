<template>
    <div class="no-border card col-xl-8 col-md-7 mb-0 no-radius px-0">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Activity List by Therapist name</h4>
                    </div>
                </header>
                <div class="card-body">
                  <div class="row no-margin" v-if="!has_activity_list">
                      <p>No Activity List for this patient</p>
                  </div>
                  <div class="row no-margin" v-else>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Morning</h5>
                            <div class="b-1 pt-10">
                                <ul>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Afternoon</h5>
                            <div class="b-1 pt-10">
                                <ul>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                </ul>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Evening</h5>
                            <div class="b-1 pt-10">
                                <ul>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                    <li>werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</li>
                                </ul>
                            </div>
                        </div>
                  </div>
                </div>
            </div>
</template>

<script>
export default {
    data() {
        return {
            has_activity_list: true
        }
    }
}
</script>