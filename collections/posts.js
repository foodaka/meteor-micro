Posts = new Meteor.Collection('posts');

Posts.allow({
  insert: function(userId,doc){
    //allow person to post if logged in
    return !! userId;
  }
});
