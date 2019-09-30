<template>
  <div class="min-h-fullscreen bg-img p-20 center-vh" data-overlay="7">
        <div class="row no-margin">
            <div class="card px-50 py-30 col-5 mb-0 no-radius" style="border-right: 1px solid #406c74;">
                <div class="row h-100">
                    <div class=" align-self-center">
                    <img src="../../assets/logo.png" alt="...">
                    <p class="text-center text-muted fs-13 pl8 mt64">Don't have an account? <router-link to="/signup" tag="a" class="text-primary fw-500" href="#">Sign up</router-link></p>          
                </div>
                </div>
                
            </div>
            <div class="card p-30 col-7 mb-0 no-radius">
                <h4 class="text-uppercase fw-600">Log in to your account</h4>
                <br>

                <form>
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="text" class="form-control" id="email">
                    </div>  
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="password">
                    </div>     
                    <div class="form-group">
                      <button class="btn btn-bold btn-block btn-primary">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  }
}
</script>
