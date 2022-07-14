import * as firebase from "./services/firebase.js";
//import * as create from "./pages/blog-create/create.js";




let card = `
<div class="flex-item card">
  <div class="card-header">
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">

        <li><a class="dropdown-item" href="#"><a href="./pages/blog-edit/edit.html?blogID=BLOGID">Edit</a></a></li>
    <li><a class="dropdown-item" href="#">Delete</a></li>
  </ul>
</div>
      <h3>title</h3>
  </div>
  <div class="card-content">
      description
      <a href="./pages/blog-read/read.html?blogID=BLOGID">Read It</a>
  </div>
</div>`;

/*const blogPosts = [
    {
      id: 1,  
      title: "Chocolate Chip Cookies",
      author: "Ava Beninati",
      description: "Read this recipe to make the best chocolate chip cookies",
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
        title: "Brownies",
        author: "Charlotte Kraus",
        description: "If you want to make the world's best brownies, click this recipe to find out how",
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
        title: "Pizza from Scratch",
        author: "Shamik Dandekar",
        description: "Click here to find out how to make pizza from scratch",
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
    
    
    
  ]; */

const blogList = document.getElementById("blog-list");

//console.log(blogList);

let html = "";

/*for(let i = 0; i<blogPosts.length; i++)
{
let cardcopy = Object.assign(card);   
cardcopy = cardcopy.replace('title' , blogPosts[i].title);
cardcopy = cardcopy.replace('description' , blogPosts[i].description);
cardcopy = cardcopy.replace('BLOGID' , blogPosts[i].id);   
html += cardcopy;
};*/

//blogList.innerHTML= html;

async function fetchBlogIds() {
  const querySnapshot = await firebase.firestore.getDocs(
    firebase.firestore.collection(firebase.db, "blogPost")
  );

  querySnapshot.forEach((doc) => {
    console.log(doc.id);
  });
}

async function blogCards() {
  const querySnapshot = await firebase.firestore.getDocs(
    firebase.firestore.collection(firebase.db, "blogPost")
  );

  querySnapshot.forEach((doc) => {
    const blogPost = doc.data();
    let cardcopy = Object.assign(card);
    cardcopy = cardcopy.replace("title", blogPost.title);
    cardcopy = cardcopy.replace("description", blogPost.description);
    cardcopy = cardcopy.replace("BLOGID", blogPost.id);
    html += cardcopy;
  });
  blogList.innerHTML= html;
}

//fetchBlogIds();

blogCards();


