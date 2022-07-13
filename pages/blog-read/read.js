//const text;
const list = document.getElementsByClassName('text')
const text = "text";
console.log(document.text);

//java script
const blogPosts = [
    {
      id: 1,
      title: "blog 1",
      description: `New Blog Posts`,
      author:  `Charlotte`,
      datecreated: new Date (),
      imgURL: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
       [
          {
              sectionHeader: `Intro`,
              sectiontext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              sectionHeader: "Body",
              sectionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              sectionHeader: "Conclusion",
              sectionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
      ],
    },  
    {
      id: 2,
      title: "blog 2",
      description: `New Blog Posts`,
      author:  `Charlotte`,
      datecreated: new Date (),
      imgURL: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    [
          {
              sectionHeader: `Intro`,
              sectiontext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              sectionHeader: "Body",
              sectionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              sectionHeader: "Conclusion",
              sectionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
      ],
    },  
    {
      id: 3,
      title: "blog 3",
      description: `New Blog Posts`,
      author:  `Charlotte`,
      datecreated: new Date (),
      imgURL: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
      [
          {
              sectionHeader: `Intro`,
              sectiontext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              sectionHeader: "Body",
              sectionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
          {
              sectionHeader: "Conclusion",
              sectionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          },
      ],
    },     
  ];

  const list1 = document.getElementsByClassname("list-group") [0];

  for(let post of blogPosts){
  const list = document.getElementById("items");
  let newLi = document.querySelector("form");
  newLi.className = "list-group-item";

  let text = `${post.title} - Written by ${post.author} on $(post.dateCreated)` 
  let textNode = document.createTextNode(text);
  newLi.appendChild(textNode);

  list1.appendChild(newLi)
  }