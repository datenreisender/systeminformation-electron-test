require('systeminformation').versions(v => {
    console.log(v.kernel)
    process.exit()
})

