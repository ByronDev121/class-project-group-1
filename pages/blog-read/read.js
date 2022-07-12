const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

console.log(params);

//const text;
/*const list = document.getElementsByClassName('text')
const text = "text";
console.log(document.text); */

//java script
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
        {
            sectionHeader: "Main",
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

 /* const list1 = document.getElementsByClassname("list-group") [0];

  for(let post of blogPosts){
  const list = document.getElementById("items");
  let newLi = document.querySelector("form");
  newLi.className = "list-group-item";

  let text = `${post.title} - Written by ${post.author} on $(post.dateCreated)` 
  let textNode = document.createTextNode(text);
  newLi.appendChild(textNode);

  list1.appendChild(newLi) 
  } */

  const blog = blogPosts.find(x=> x.id== Number(params.blogID));

  const header = document.getElementById("header");
  const content = document.getElementById("content");

  header.innerText = blog.title + '\n' + blog.description;

  let blogContent = '';

  for(let i = 0; i<blog.content.length; i++)
  {

    blogContent += blog.content[i].sectionHeader + '\n' + blog.content[i].sectionText + '\n \n';

  }

  content.innerText = blogContent; 