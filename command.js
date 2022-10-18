let config = require("/config.json")
prefix = config.prefix
module.exports = (clients, aliases, callback) => {
    if (typeof aliases === "string") {
        aliases = [aliases]
    }
    client.on("message", message => {
        aliases.forEach(alias => {
            
        let command  = (`${prefix}${aliases}`)
        })
    })
}