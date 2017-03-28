/**
 * Created by Gagandeep on 9/27/2016.
 */
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'GRiBntxO1Nfb6dz3EDdesIyvp',
    consumer_secret: 'pupRfKWPxpeD32sYfcIBcSMx1On7DY8DgRbzC21K57Q7TvNroJ',
    access_token_key: '779440350494535681-W3RwSLRTdVZHTDjyrs3YooNuycr8HiV',
    access_token_secret: 'XPEri37fQgUU6pI3QgW3b6adVt6HjFJmWnN2M8OxLSICE'
});


//Twitter API: statuses/user_timeline

exports.status=function(req,res)
 {
    var user = req.param("id1")
    console.log("user"+user);
     var params = {screen_name: user};
    console.log("param"+JSON.stringify(params));
    client.get('statuses/user_timeline', params, function(error, tweets, response)
    {
        if(error)
        {
            console.log(error);
        }
        if (!error)
        {
            // console.log(response);
            // console.log("Tweeeets" + JSON.stringify(tweets));
            res.send({"status":200,"tweets1":tweets});
           // res.status().send()

        }
    });
 };

//Twitter API: statuses/home_timeline

exports.hometimeline=function(req,res)
 {

     var user = req.param("id2")
     console.log("user"+user);
     var params = {count: user };
     console.log("param"+JSON.stringify(params));
    client.get('statuses/home_timeline', params, function(error, tweets, response)
    {
        if (!error)
        {
            console.log(response);
            res.send({"status":200 ,"tweets1":tweets});
        }
    });
 };

//Twitter API: friendships/create

exports.friendship=function(req,res)
 {
     var user = req.param("id3")
     console.log("user"+user);
     var param_friends = {screen_name: user};
     console.log("param"+JSON.stringify(param_friends));
    client.post('friendships/create',param_friends, function(error, tweets, response)
    {
        if (!error)
        {
            // console.log(response);
            console.log("Hello gagan"+tweets["following"]);
            res.send({"status":200 ,"tweets1":tweets});
        }
    });
 };

//Twitter API: search/tweets

exports.search=function(req,res)
 {
     var user = req.param("id4")
     console.log("user"+user);
     var param_string = {q: user};
     console.log("param"+JSON.stringify(param_string));
    client.get('search/tweets', param_string, function(error, tweets, response)
    {
        if (!error)
        {
            //console.log(response);
            //console.log(tweets);
            console.log("Hello gagan"+JSON.stringify(tweets));
            res.send({"status":200 ,"tweets1":tweets});
        }
    });
 };

//Twitter API: statuses/update

exports.updatestatus=function(req,res)
 {
     var user = req.param("id5")
     console.log("user"+user);
     var param_status = {status: user };
     console.log("param"+JSON.stringify(param_status));
    client.post('statuses/update', param_status, function(error, tweets, response)

    {
        console.log(response);
        if (!error)
        {
            console.log(response);
            console.log("Hello gagan"+JSON.stringify(tweets));
            res.send({"status":200 ,"tweets1":tweets});

        }
        else
        {

            res.send({"status":250 ,"tweets1":tweets});

        }

    });
 };

//Twitter API: followers/ids

exports.followers=function(req,res)
 {
     var user = req.param("id6")
     console.log("user"+user);
     var param_screen = {screen_name: user};
     console.log("param"+JSON.stringify(param_screen));
    client.get('followers/ids', param_screen, function(error, tweets, response) {
        if (!error)
        {

            //console.log(tweets);
            //res.send(tweets);
            // console.log(response);

            res.send({"status":200 ,"tweets1":tweets});
        }
    });
 };

//Twitter API: followers/list

exports.followerslist=function(req,res)
 {
     var user = req.param("id7")
     console.log("user"+user);
     var param_screen = {screen_name: user};
     console.log("param"+JSON.stringify(param_screen));
    client.get('followers/list', param_screen, function(error, tweets, response)
    {
        if (!error)
        {
            //console.log(response);
            //console.log(tweets);
            //res.send(tweets);

            res.send({"status":200 ,"tweets1":tweets});
        }
    });
 };

//Twitter API: account/settings

exports.friendslist=function(req,res)
 {
     var user = req.param("id8")
     var param = {screen_name : user};
     console.log("param"+JSON.stringify(param));
    client.get('friends/list', param , function(error, tweets, response)
    {
        if (!error)
        {
            // console.log(response);
            // console.log(tweets);
            res.send({"status":200 ,"tweets1":tweets});
            console.log("Tweeeets" + JSON.stringify(tweets));
        }
    });
 };

//Twitter API: users/search

exports.searchuser=function(req,res)
 {
     var user = req.param("id9")
     console.log("user"+user);
     var param_string = {q: user , count:'15'};
     console.log("param"+JSON.stringify(param_string));
    client.get('users/search', param_string, function(error, tweets, response)
    {
        if (!error)
        {
            // console.log(response);
            // console.log(tweets);
            //res.send(tweets);
            console.log("inside");
            res.send({"status":200 ,"tweets1":tweets});
        }
    });
 };

//PP: Twitter API: trends/place

exports.place=function(req,res)
 {
     var user = req.param("id10")
     console.log("user"+user);
     var param = {id: user};
     console.log("param"+JSON.stringify(param));
    client.get('trends/place', param, function(error, tweets, response)
    {
        if (!error)
        {
            console.log("Tweeeets" + JSON.stringify(tweets));
            res.send({"status":200 ,"tweets1":tweets});
        }
    });
 };
