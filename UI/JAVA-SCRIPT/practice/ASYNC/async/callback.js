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

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000)
};
let post = {
    title: "four",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, perspiciatis illum omnis esse inventore alias."
}

createPost(post, viewPost)