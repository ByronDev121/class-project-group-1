import * as firebase from "../../services/firebase.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);

/*const blog = blogPosts.find((x) => x.id == Number(params.blogID));


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

content.innerHTML = blogContent; */

/*const blogPost = {
  id: 1,
  title: "Blog Post 111",
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
}; */

const blogPosts = [
  {
    id: 1,  
    title: "Blog Post 1",
    author: "Ava Beninati",
    description: "follow this recipe to bake the most delisious chocolate chip cookies",
    dateCreated: new Date(),
    imageURL:
      "http://www.jemofthesouth.com/jem/wp-content/uploads/2017/07/Chocolate-Chip-Cookies.jpg",
    content: [
      {
        sectionHeader: "Ingredients",
        sectionText: "1 cup butter, softened, 1 cup white sugar, 1 cup packed brown sugar, 2 eggs, 2 teaspoons vanilla extract, 1 teaspoon baking soda, 2 teaspoons hot water, ½ teaspoon salt, 3 cups all-purpose flour, 2 cups semisweet chocolate chips, 1 cup chopped walnuts",
      },
    ],
     
  },
  {
      id: 2, 
      title: "Blog Post 2",
      author: "Shamik Dandekar",
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
      author: "Char",
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


/*async function createPosts() {
  // Add a new document with a generated id.
  for(let i = 0; i<blogPosts.length; i++)
  {
  const docRef = await firebase.firestore.addDoc(
    firebase.firestore.collection(firebase.db, "blogPost"),
    
      blogPosts[i]
    
  );
  console.log("Document written with ID: ", docRef.id);

}
}

createPosts(); */

/*const docRez = firebase.firestore.doc(firebase.db, "blogPost");

// Get a document, forcing the SDK to fetch from the offline cache.
try {
  const doc = await getDocFromDB(docRez);

  // Document was found in the cache. If no cached document exists,
  // an error will be returned to the 'catch' block below.
  console.log("Cached document data:", doc.data());
} catch (e) {
  console.log("Error getting cached document:", e);
}*/


