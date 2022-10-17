posts =[
    {
        title:"Hello World",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, perspiciatis illum omnis esse inventore alias."
    },
    {
        title:"Title 2",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, perspiciatis illum omnis esse inventore alias."
    },
    {
        title:"three World",
        content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, perspiciatis illum omnis esse inventore alias."
    }
    
];

function viewPost () {
    setTimeout(()=> {
        let html_content = "";
        posts.map((post)=> {
            html_content +=`<h1>${post.title}</h1><p>${post.content}</p>`;
        })
        document.body.innerHTML = html_content;
    },1000)
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        posts.push(post)
        let error = false;
        if(!error) {
            resolve();
        } else {
            reject("Error Occured");
        }
    })
};
let post = {
    title: "four",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, perspiciatis illum omnis esse inventore alias."
}

createPost(post).then(viewPost).catch((err) => {
    console.log(err);
})