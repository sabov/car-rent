var plan = require("flightplan");

plan.target("stage", {
    host: "sabov.me",
    username: "root",
    agent: process.env.SSH_AUTH_SOCK,
    branch: "master"
});

plan.remote(function (remote) {

    remote.log("****====== Start remote deploy ======****");

    remote.with("cd /var/www/car-rent", function() {

        remote.log("update source");
        remote.exec("git checkout #{remote.runtime.branch}");
        remote.exec("git pull");

        remote.log("Install dependencies");

        remote.exec("bower install --allow-root");
    });
});
