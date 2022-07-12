//java script


const HTMLElement = `
<div class="flex-item card">

<div class="card-header">
    <h3>Blog 1</h3>
</div>

<div class="card-content">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.
    <a href="../blog-read/read.html">Read It</a>
</div>

</div>
`;
let card =  `<div class="flex-item card">

<div class="card-header">
    <h3>title</h3>
</div>

<div class="card-content">
    description
    <a href="../blog-read/read.html?blogID=BLOGID">Read It</a>
</div>

</div> `
const blogPosts = [
    {
      id: 1,  
      title: "Blog Post 1",
      author: "Ava Beninati",
      description: "This is test1",
      dateCreated: new Date(),
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/todo-app-a2a71.appspot.com/o/javascript.png?alt=media&token=70cb3000-1233-471e-8b67-6a0fa1a66505",
      content: [
        {
          sectionHeader: "Intro",
          sectionText: "text",
        },
      ],
       
    },
    {
        id: 2, 
        title: "Blog Post 2",
        author: "Ava Beninati",
        description: "This is test2",
        dateCreated: new Date(),
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/todo-app-a2a71.appspot.com/o/javascript.png?alt=media&token=70cb3000-1233-471e-8b67-6a0fa1a66505",
        content: [
          {
            sectionHeader: "Intro",
            sectionText: "text",
          },
        ],
         
      },
      {
        id: 3, 
        title: "Blog Post 3",
        author: "Ava Beninati",
        description: "This is test3",
        dateCreated: new Date(),
        imageURL:
          "https://firebasestorage.googleapis.com/v0/b/todo-app-a2a71.appspot.com/o/javascript.png?alt=media&token=70cb3000-1233-471e-8b67-6a0fa1a66505",
        content: [
          {
            sectionHeader: "Intro",
            sectionText: "text",
          },
        ],
         
      },
    
    
    
  ];


const blogList = document.getElementById('blog-list');

console.log(blogList);

let html = '';

for(let i = 0; i<blogPosts.length; i++)
{
let cardcopy = Object.assign(card);   
cardcopy = cardcopy.replace('title' , blogPosts[i].title);
cardcopy = cardcopy.replace('description' , blogPosts[i].description);
cardcopy = cardcopy.replace('BLOGID' , blogPosts[i].id);   
html += cardcopy;
};

blogList.innerHTML= html;




