let express = require( "express" );
let morgan = require( "morgan" );
let mongoose = require( "mongoose" );
let bodyParser = require( "body-parser" );
let { PostList } = require('./blog-post-model');
const { DATABASE_URL, PORT } = require( './config' );

let app = express();
let jsonParser = bodyParser.json();
mongoose.Promise = global.Promise;

app.use( express.static( "public" ) );

app.use( morgan( "dev" ) );

/*
const Post = {
    id: uuidv4(),
    title: string,
    content: string,
    author: string,
    publishDate: Date
}
*/

/*let post_list = [
    {
        id: uuidv4(),
        title: "Post 1",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Alex Trujillo",
        publishDate: Date("December 17, 1995 03:24:00")
    }
]*/
//============================================================================
//============================================================================
function exist(autor){
    for (let index = 0; index < post_list.length; index++) {
        console.log(it.autor)
        if(post_list[index].author == autor){
            return true;
        }
    }
}

function existID(uid){
    for (let index = 0; index < post_list.length; index++) {
        if(post_list[index].id == uid){
            return true;
        }
    }
}


function deleteById(uid){
    let array = [];
    for (let index = 0; index < post_list.length; index++) {
        if(post_list[index].id != uid){
            console.log(post_list[index].id + " ====== " + uid );
            array.push(post_list[index])
        }
    }
    post_list = array;
}

function getPostTitle(autor){
    for (let index = 0; index < post_list.length; index++) {
        if(post_list[index].author == autor){
            return post_list[index].title;
        }
    }
}

function getPostById(uid){
    for (let index = 0; index < post_list.length; index++) {
        if(post_list[index].id == uid){
            return post_list[index];
        }
    }
}

function addPostToList(title, content, author, date){
    post_list.push({
        id:  uuidv4(),
        title: title,
        content: content,
        author: author,
        publishDate: date
    })

}

function updatePost(uid,title, content, author, date){
    for (let index = 0; index < post_list.length; index++) {
        console.log(post_list[index].id + " ====== " + uid );
        if(post_list[index].id == uid){
            post_list[index].title = title != null ? title : post_list[index].title;
            post_list[index].content = content != null ? content : post_list[index].content;
            post_list[index].author = author != null ? author : post_list[index].author;
            post_list[index].date = date;
        }
    }
    
}
//============================================================================
//============================================================================
app.get("/blog-posts", ( req, res, next ) => {
    PostList.get()
        .then( allPosts => {
            return res.status( 200 ).json( allPosts );
        })
        .catch( error => {
            res.statusMessage = "Something went wrong with the DB. Try again later.";
            return res.status( 500 ).json({
                status : 500,
                message : "Something went wrong with the DB. Try again later."
            })
        });
});

app.post("/blog-posts", jsonParser, (req, res) => {
    console.log(req.body);
    let body = req.body;
    let title = body.title;
    let content = body.content;
    let author = body.author;
    let publishDate = body.publishDate;
    if(title != null && content != null && author != null && publishDate != null){
        let newPost = {
            title,
            content,
            author,
            publishDate
        };
        PostList.post(newPost)
            .then( post => {
                return res.status( 201 ).json({
                    message : "Post added to the list",
                    status : 201,
                    student : post
                });
            })
            .catch( error => {
                res.statusMessage = "Something went wrong with the DB. Try again later.";
                return res.status( 500 ).json({
                    status : 500,
                    message : "Something went wrong with the DB. Try again later."
                });
            });
    }else{
        alert("Error. Please fill all fields.")
    }
});



app.get("/blog-post", (req, res) => {
    console.log("blog-post")
    let author = req.query.author;
    console.log(author)
    if(!author){
        res.statusMessage = CONEXION_406;
        return reposts.status(406).json({
            message: CONEXION_406,
            status:406
        })
    }else if (exist(author) == false){
        res.statusMessage = CONEXION_4066;
        return res.status(406).json({
            message: CONEXION_4066,
            status:406
        })
    }else{
        const postTitle = getPostTitle(author)
        res.statusMessage = CONEXION_200;
        return res.status(200).json({
            message: CONEXION_200,
            status:200,
            post_title: postTitle
        })
    }
});



app.delete("/blog-posts/:id", (req, res) => {
    let id = req.params.id;
    if(!existID(id)){
        res.statusMessage = "Id does not exist!";
        return res.status(406).json({
            message: "Id does not exist!",
            status:406
        });
    }else{
        deleteById(id);
        console.log(post_list)
        res.statusMessage = "Post deleted Successfully";
        return res.status(201).json({
            message: "Post deleted Successfully",
            status:201
        });
    }
});

app.put("/blog-posts/:id", jsonParser, (req, res) => {
    console.log(req.body);
    let id = req.query.id;
    let body = req.body;
    console.log(id)
    let bodyId = body.id;
    let title = body.title;
    let content = body.content;
    let author = body.author;
    let publishDate = body.publishDate;
    if(body == undefined && existID(id)){
        res.statusMessage = CONEXION_4066;
        return res.status(406).json({
            message: CONEXION_4066,
            status:406
        })
    }
    if (id != bodyId && id != undefined) {
        res.statusMessage = "Body and id not match!";
        return res.status(409).json({
            message: "Body and id not match!",
            status:409
        });
    }else{
        updatePost(bodyId,title, content, author, publishDate)
        res.statusMessage = "Post updated successfully!";
        return res.status(201).json({
            message: "Post updated successfully!",
            status:201
        });
    }

});

let server;

function runServer(port, databaseUrl){
    return new Promise( (resolve, reject ) => {
        mongoose.connect(databaseUrl, response => {
            if ( response ){
                return reject(response);
            }
            else{
                server = app.listen(port, () => {
                    console.log( "App is running on port " + port );
                    resolve();
                })
                    .on( 'error', err => {
                        mongoose.disconnect();
                        return reject(err);
                    })
            }
        });
    });
}

function closeServer(){
    return mongoose.disconnect()
        .then(() => {
            return new Promise((resolve, reject) => {
                console.log('Closing the server');
                server.close( err => {
                    if (err){
                        return reject(err);
                    }
                    else{
                        resolve();
                    }
                });
            });
        });
}

runServer( PORT, DATABASE_URL )
    .catch( err => {
        console.log( err );
    });

module.exports = { app, runServer, closeServer };