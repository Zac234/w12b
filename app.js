function successFunction(response){
    console.log (reponse)
    console.log(response.data)
    print (response.data)
}

function failureFunction(error){
    console.log(error)
    print("UNAUTHORIZED ACCESS")
}

axios.request({
    method:GET,
    URL:"https://api.kanye.rest"
}).then (successFunction).catch(failureFunction)

