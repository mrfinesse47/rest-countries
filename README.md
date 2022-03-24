# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

#### CSS Object Fit Property

I noticed the flags were cropped on the smaller cards in the figma design files. Some flags would leave white-space horizontally or some vertically due to all flags not being the same dimensions. So I had to figure out a way to crop the flag horizontally or vertically depending on how it overflowed from its parent container. from w3: If we use object-fit: cover; the image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit:

```css
figure {
  height: 160px; /*container-width*/
  overflow: hidden; /*hide bounds of image */
  margin: 0; /*reset margin of figure tag*/
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0 0;
  img {
    display: block; /*remove inline-block spaces*/
    object-fit: cover;
    width: 100%;
  }
}
```

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

#### Custom useState Hook For Local Storage

I found this neat trick to create a custom hook for useState but which sets local strage at the same time. I modified it a little as well to incorporate an initial value if it does not exist in local storage. I also made modifications to typecast "true" or "false" strings to a boolean.

```js
const useStateWithLocalStorage = (localStorageKey, fallBack) => {
  let storageVal = localStorage.getItem(localStorageKey);
  if (storageVal === "true") {
    storageVal = true;
  } //typecasting to bool
  if (storageVal === "false") {
    storageVal = false;
  }
  const [value, setValue] = useState(storageVal || fallBack);
  //brings in the initial value from local storage and sets state or sets state to the fallback

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]); //will run any time value changes, keeping local storage updated

  //exports value and setvalue like a normal useState hook would.
  //you don't notice the difference using it elsewhere
  return [value, setValue];
};

export default useStateWithLocalStorage;
```

credit to this blog for the article which explained most of the prior code [robinwieruch](https://www.robinwieruch.de/local-storage-react/)

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
