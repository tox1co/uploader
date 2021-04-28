module.exports = {
    Random: (length) => {
        let gen = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(let x = 0;x < length; x++) {
            gen += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return gen;
    },
};