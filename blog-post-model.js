let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

let postSchema = mongoose.Schema({
    firstName : { type : String },
    lastName : { type : String },
    title : { type : String },
    content : { type : String },
    author: { type : String },
    publishDate : { type: Date, default: Date.now },
    id : {type : Number, required : true }
});
let Post = mongoose.model( 'Post', postSchema );


let PostList = {
    get : function(){
        return Post.find()
            .then( posts => {
                return posts;
            })
            .catch( error => {
                throw Error( error );
            });
    },
    getByID : function(id){
        return Post.findOne({id : id})
            .then(post => {
                return post;
            })
            .catch( error => {
                throw Error( error );
            });

    },
    post : function( newPost ){
        return Post.create( newPost )
            .then( post => {
                return post;
            })
            .catch( error => {
                throw Error(error);
            });
    },
    put : function( updatedPost ){
        return PostList.getByID( updatedPost.id )
            .then( post => {
                if ( post ){
                    return Post.findOneAndUpdate( {id : post.id}, {$set : updatedPost}, {new : true})
                        .then( newPost => {
                            return newPost;
                        })
                        .catch(error => {
                            throw Error(error);
                        });
                }
                else{
                    throw Error( "404" );
                }
            })
            .catch( error => {
                throw Error(error);
            });
    }
};

module.exports = { PostList };
