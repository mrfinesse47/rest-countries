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
- [Author](#author)
- [Acknowledgments](#acknowledgments)

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

### Links

- Repo URL: [Repo](https://github.com/mrfinesse47/rest-countries)
- Live Site URL: [Rest Countries](https://mrfinesse47.github.io/rest-countries/)

## My process

- As usual, plan, built, test, repeat.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

### CSS Object Fit Property

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

### Custom useState Hook For Local Storage

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

### How to deplay a react app to Github pages

By following this [article](https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/) I figured out how to deploy a React App to Github pages

### Continued development

Perhaps I would use React router or something similar to make use of the browser back button. But, as of now I just want to get on with the next project

## Author

Created By: Kevin Mason

- Linkedin - [@kevin-mason-7b83b3228](https://www.linkedin.com/in/kevin-mason-7b83b3228/)
- Front End Mentor - [@@mrfinesse47](https://www.frontendmentor.io/profile/mrfinesse47)

## Acknowledgments

As usual, I would like to thank the Youtube/ article/ blog/ forum respnders of the world for sharing the knowledge of web development.
