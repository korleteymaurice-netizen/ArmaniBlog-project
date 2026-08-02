
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Store posts in memory
let posts = [];

// Home page
app.get("/", (req, res) => {
    res.render("index", { posts });
});

app.get("/create", (req, res) => {
    res.render("create");
});


app.post("/create", (req, res) => {

    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        date: new Date().toLocaleDateString()
    };

    posts.push(newPost);

    res.redirect("/");
});

app.get("/post/:id", (req, res) => {

    const id = Number(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).render("404");
    }

    res.render("post", { post });
});

app.get("/edit/:id", (req, res) => {

    const id = Number(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).render("404");
    }

    res.render("edit", { post });
});

app.post("/edit/:id", (req, res) => {

    const id = Number(req.params.id);

    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).render("404");
    }

    post.title = req.body.title;
    post.content = req.body.content;

    res.redirect("/");
});

app.post("/delete/:id", (req, res) => {

    const id = Number(req.params.id);

    posts = posts.filter(post => post.id !== id);

    res.redirect("/");
});

app.use((req, res) => {

    res.status(404).render("404");

});


// Start server
app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});
