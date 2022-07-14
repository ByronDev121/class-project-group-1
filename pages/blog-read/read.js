const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);

const blogPosts = [
  {
    id: 1,
    title: "Chocolate Chip Cookies",
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
      {
        sectionHeader: "Directions",
        sectionText: "Preheat oven to 350 degrees F (175 degrees C). Mix together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans. Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.",
      },
    ],
  },
  {
    id: 2,
    title: "Brownies",
    author: "Charlotte Kraus",
    description: "World's best brownie recipe",
    dateCreated: new Date(),
    imageURL:
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500/k%2FEdit%2Fboyfriendbrownies-6",
    content: [
      {
        sectionHeader: "Ingredients",
        sectionText: "7 tablespoons unsalted butter, room temperature, plus more for baking pan, 3/4 cup plus 2 tablespoons unbleached all-purpose flour, 1/4 teaspoon baking powder, 1/2 teaspoon kosher salt, 7 ounces unsweetened chocolate, finely chopped (1 1/3 cups), 3 tablespoons safflower or coconut oil, 1 cup granulated sugar, 1 cup packed light-brown sugar, 3 large eggs, room temperature",
      },
      {
        sectionHeader: "Directions",
        sectionText: "Preheat oven to 350 degrees. Butter a 9-inch square baking pan. Line with parchment, leaving a 2-inch overhang on two sides; butter parchment.                                                                                                                                             In a medium bowl, whisk together flour, baking powder, and salt. In a heatproof bowl set over a pot of simmering water, melt chocolate and butter with oil. Remove from heat. Add both sugars and whisk 10 seconds. Add eggs and whisk vigorously until glossy and smooth,45 seconds. Using a rubber spatula, stir in dry ingredients. Pour batter evenly into prepared pan, smoothing top with spatula.                                                                                        In a medium bowl, whisk together flour, baking powder, and salt. In a heatproof bowl set over a pot of simmering water, melt chocolate and butter with oil. Remove from heat. Add both sugars and whisk 10 seconds. Add eggs and whisk vigorously until glossy and smooth,45 seconds. Using a rubber spatula, stir in dry ingredients. Pour batter evenly into prepared pan, smoothing top with spatula."
      }
    ],
  },
  {
    id: 3,
    title: "Pizza from Scratch",
    author: "Shamik Dandekar",
    description: "Try out my newest recipe on how to make pizza from scratch",
    dateCreated: new Date(),
    imageURL:
      "https://tse1.mm.bing.net/th?id=OIP.VIHoNlxPTkXfW2i6DgfIbwHaF7&pid=Api&P=0&w=215&h=172",
    content: [
      {
        sectionHeader: "Ingredients",
        sectionText: "1 package (1/4 ounce) active dry yeast, 1 teaspoon sugar, 1-1/4 cups warm water (110° to 115°), 1/4 cup canola oil, 1 teaspoon salt, 3-1/2 to 4 cups all-purpose flour, 1/2 pound ground beef, 1 small onion, chopped, 1 can (15 ounces) tomato sauce, 3 teaspoons dried oregano, 1 teaspoon dried basil, 1 medium green pepper diced, 2 cups shredded part-skim mozzarella cheese",
      },
      {
        sectionHeader: "Directions",
        sectionText: "In large bowl, dissolve yeast and sugar in water; let stand for 5 minutes. Add oil and salt. Stir in flour, 1 cup at a time, until a soft dough forms. Turn onto a floured surface; knead until smooth and elastic, 2-3 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 45 minutes. Meanwhile, cook beef and onion over medium heat until beef is no longer pink, breaking meat into crumbles; drain. Punch down dough; divide in half. Press each half into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil; spread over each crust. Top with beef mixture, green pepper and cheese. Bake at 400° for 25-30 minutes or until crust is lightly browned."
      }
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
