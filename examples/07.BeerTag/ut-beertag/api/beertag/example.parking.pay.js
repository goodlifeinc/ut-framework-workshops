/** @type { import("../../handlers").handlerFactory } */
module.exports = ({
    import: {
        errorBeertagZoneNotFound
    }
}) => ({
    'example.parking.pay'({zone}) {
        const amount = {
            green: '2.00',
            blue: '1.00'
        }[zone];
        if (!amount) throw errorBeertagZoneNotFound({params: {zone}});
        return {
            details: {
                time: new Date().toISOString(),
                amount
            }
        };
    }
});
