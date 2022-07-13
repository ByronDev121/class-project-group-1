const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);

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

const blog = blogPosts.find((x) => x.id == Number(params.blogID));


const img = document.getElementById("img")
const title = document.getElementById("title");
const description = document.getElementById("description");
const content = document.getElementById("content");

img.setAttribute('src', blog.imageURL)
title.innerText = blog.title;
description.innerText = blog.description;

let blogContent = "";

for (let i = 0; i < blog.content.length; i++) {
  blogContent +=`
  <div>
    <h1 class="mb-3">${blog.content[i].sectionHeader}</h1>
    <p class="mb-5">${blog.content[i].sectionText}</p>
  </div>
  `;
}

content.innerHTML = blogContent;
