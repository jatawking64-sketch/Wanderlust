module.exports = (fnn) => {
    return (req,res, next) => {
        fnn(req, res, next).catch(next);
    };
};