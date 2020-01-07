// const axios = require('axios');

const allMixins = {
    methods: {
        fetchAllPatients(firstLoad) {
            axios.get('/therapist/view_patients/')
            .then(res => {
                console.log(res.data)
                firstLoad = false
                return data = res.data
            })
            .catch(err => {
                console.log(err)
                firstLoad = false
                    this.$notify({
                        group: 'response',
                        type: 'error',
                        title: `${err.data.message}`,
                        // text: `${res.data.message}`,
                        duration: 2500,
                        ignoreDuplicates: true
                    });
            })
        },
        retrieveCookie(name) {
            let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches ? window.atob(matches[1]) : undefined;
        },
        deleteAllCookies() {
            let cookies = document.cookie.split("; ");
            for (var c = 0; c < cookies.length; c++) {
                var d = window.location.hostname.split(".");
                while (d.length > 0) {
                    var cookieBase = cookies[c].split(";")[0].split("=")[0] + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                    var p = location.pathname.split('/');
                    document.cookie = cookieBase + '/';
                    while (p.length > 0) {
                        document.cookie = cookieBase + p.join('/');
                        p.pop();
                    };
                    d.shift();
                }
            }
            // callback()
        },
    }
}
export default allMixins