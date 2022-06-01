/** @type { import("../../handlers").libFactory } */
module.exports = ({
    import: {
        errorBeertagColorNotFound
    }
}) => ({
    css(color) {
        const result = {
            blue: '#0000FF',
            navy: '#000080',
            green: '#008000'
        }[color];
        if (!result) throw errorBeertagColorNotFound({params: {color}});
        return result;
    }
});
