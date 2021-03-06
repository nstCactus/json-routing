exports.index = function (req, res, next) {
    console.log('policy loaded');
    next();
};

exports.other = function (req, res, next) {
    console.log('second policy loaded');
    next();
};

exports.a1 = function (req, res, next) {
    console.log('global policy 1');
    next();
};

exports.a2 = function (req, res, next) {
    console.log('global policy 2');
    next();
};




module.exports.index2 = function (req, res, next) {

    var message = "middleware loadeded"; // debug
    req.policy = 'middleware is loaded at ' + new Date(); // debug
    console.log('policy fired');
    req.session = {test: 1, isLogged: false};
    console.log(req.session);

    if (req.session.isLogged) {
        return res.redirect('http://' + req.hostname + ":3000/403");
    }

    next();
};


exports.all = function (req, res, next) {
    req.session = 1;
    console.log('test policy, all action loaded');
    next();
};


exports.check = function (req, res, next) {
    req.session = {};
    req.session.check = "ok";
    console.log('middleware check loaded');
    next();
};


exports.index2 = function(req,res) {

    res.send('index2 policy test');
};
