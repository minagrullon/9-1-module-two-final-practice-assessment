# Module Two Practice Assessment

This challenge is designed to assess the HTML, CSS, and JavaScript skills you have gained so far.

## Tests

No tests have been created for this practice assessment

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

```
npm install
```

This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

1. Use `Go Live` to view your progress

## Details

You will create an application using HTML, CSS, and JavaScript that accesses the Studio Ghibli API and allows users to choose people and view their information as well as create shououts for that person.

### The API

The API can be accessed via the link below.

- [Studio Ghibli API](https://ghibliapi.herokuapp.com)

You will only need to make one API call in your application to receive all people. Look under "Endpoints" to find the URL you will need to access.

### Initial Layout and Style

All CSS Styles should be in their own css file

Your html page should include the following: (pay attention to the hierarchy)

- [ ] `body`

  - [ ] The page's background should be the color of your choice, not white.
  - [ ] All text should be of the font `Verdana`.
  - [ ] margin and padding should be set to `0`
  - [ ] Box-sizing should be set to `border-box`

- `header`

  - [ ] `header` should have a height of 150 pixels
  - [ ] `header`: takes up 100% of the page's width
  - [ ] `img`: An image of the included logo should be in the header and should be 100px for both height and width. The image can be found in the `assets/` folder
  - [ ] `img` should be round. (hint: use the border-radius)
  - [ ] `h1`: `Random People App`
  - [ ] The `header`'s background should be `black` using hexadecimal values
  - [ ] The `header`'s font should be white using rgb values
  - [ ] The `img` and `h1` should both be in the center of the page

- [ ] `main`
  - [ ] `section`
    - [ ] `h2`: `Select Person`
    - [ ] `select`
      - [ ] `option` blank, no value. Remaining `option`s will be populated later with the people's names from the API
  - [ ] `hr` centered and only takes up 50% of the width of the screen
  - [ ] `section`
    - [ ] `h2`: `Add a Shoutout`
    - [ ] `form`
      - [ ] `label`, `for` = `shoutout`: `Your shoutout`
      - [ ] `input`, `id` = `shoutout`: type = `text`
      - [ ] `input`: type submit
  - [ ] `section`
    - [ ] `div`, `id` = `info`: starts empty, will be populated with `h4` and three `p` elements, when a person is selected
  - [ ] `section`
    - `h2`: `Shoutouts`
    - `ul` this should be empty and will be populated with `li`'s based on the shoutouts

### Select Menu

The people's names should be populated into `option` elements from a call to the API inside the select menu.

`option` elements should have a `value `of the person's `name` and the text should be the person's `name`.

The first option should be blank, with no `value` and no text. Create using HTML.

### Info about Person

This content should change each time the user chooses a new option in the dropdown list.

When a person is selected through one of the options from the dropdown list, the user should see a:

An `h4` with the person's name in the info section of the page. (e.g. Name: Isis)
A `p` with the person's age. (e.g. Age: 22)
A `p` with person's eye color. (e.g. Eyes: green)
A `p` with the persons hair color (e.g Hair Color: brown)

This content should change each time the user choose a new option in the dropdown list.

### Add Shoutouts

When the user enters their shoutout into the text input and presses the "Submit" button, they should see:

- [ ] The shoutout should be an `li` inside of a `ul` element, with the name of the person in a `strong` element with a colon followed by the text of the shoutout in plain text afterwards.
- [ ] The `li` should not have a dot next to it
- [ ] The shoutout text should be cleared from the text input when the `Submit` button is clicked.

- [ ] If the user selects a different dropdown option after making the shoutout, all of the shoutouts should persist. (i.e. stay on the page)

- [ ] If the submit button is clicked and there is no person chosen in the `Select Person` input box, user should be alerted to `Please choose a person`
- [ ] If the submit button is clicked and there is nothing in the `shoutout` input box, user should be alerted, `Please enter a shoutout for <person's name here>`

### Reset Shoutouts

A button with an `id` of `reset-shoutouts`, when clicked should remove all the shoutouts that are listed.

### Commit history

Make sure to commit often after specific features are complete. Use sensible commit messages.
