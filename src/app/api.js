class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      //'token':token,
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.mindCentralExplorer(route, null,'GET');
  }

  static put(route, params) {
    return this.mindCentralExplorer(route, params, 'PUT')
  }

  static post(route, params) {
    return this.mindCentralExplorer(route, params,'POST')
  }
  static postWithToken(route, params,token) {
    return this.mindCentralExplorer(route, params,token, 'POST',)
  }

  static delete(route, params) {
    return this.mindCentralExplorer(route, params, 'DELETE')
  }

  static mindCentralExplorer(route, params,verb,) {
    //const host = 'http://www.jobsarthii.com/Backend/api'
    const host = 'http://192.168.43.109:91/JobSarthi/Backend/api'
    const url = `${host}${route}`
    console.log(url)
    let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    //options.headers = Api.headers(token)
      options.headers = Api.headers()
    //console.log('---------Data inside api-----',params)
    //console.log('-------header called-------',Api.headers(token))
    return fetch(url, options).then( resp => {
      //console.log('-----my Response-----',resp)
      let json = resp.json();
    console.log('-----inside api-----',json)
      if (resp.ok) {
        //console.log('-----inside api-----',resp)
        return json;
          //console.log('-----inside api-----',resp)
      }
      return json.then(err => {throw err});

    }).then( json => json);
  }
}
export default Api
