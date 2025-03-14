# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
- [Focus](#focus)
- [Outcome](#outcome)
- [Process](#process)
- [Built with](#built-with)
- [Feedback](#feedback)
- [Lessons](#lessons)
- [Continued development](#cont-development)
- [Useful resources](#useful-resources)

## Overview

This challenge is to design and build an interactive rating component for web desktop & mobile. It will be my first time using JS for a project after spending a few months gaining confidence in front-end styling skills.

## Focus

My focus here is to write good and functioning JS that is clear, concise and uncomplicated.

## Outcome

![](./)

:jigsaw: [Live Site URL]()  
:pencil2: [Solution URL]()

## Built with

:gear: Semantic HTML5 markup  
:gear: CSS  
:gear: Desktop-first workflow  
:gear: Sass
:gear: JavaScript

## Process

1. HTML
2. Import resets Sass
3. I originally had the rating buttons in an `<ul>` until I learnt about Forms with Input type Buttons.
4. Learnt about HTML forms and JS Event Listeners
5. Learnt about how to listen for an event and trigger a function upon Submit.
6. Added more JS with variables to get the You chose X to work
7. Had duplicate text, so edited See below
8. Could add a Please choose a rating if Submit is hit on its own but can't figure this out right now...
9. I debugged my please-submit state!
10. Doesn't register 1 right now
11. I had these original styles on the radio before I read the article - didn't know about `appearance: none;`. Used to adjust "platform-native styling based on the user's operating system".
12. It's `box-shadow` not gradient!

`    // color: hsl(217, 12%, 63%);
    // border: solid hsl(0, 0%, 97%) 1px;
    // border-radius: 50px;
    // padding: 10px;
    // font-weight: 700;`

## Time taken

Estimation: 8-10hrs

:alarm_clock: Desktop:
:alarm_clock: Mobile:

## Feedback

## Lessons

- `.querySelector` vs. `.getElementByID`.
- Event Listeners vs. Event Handlers.
- Callback functions as functions that take place within/after another.
- `event.preventDefault()`
- In JS, we refer to class names with a dot.
- Link to JS in `<head>` section of HTML, using `<script>` tag and `src=` attribute.
- Application of Scope -

"Scope: By declaring selectedRating within the function, we make sure that it is scoped to that function and gets updated each time the event listener runs. If it were declared outside the function, it might not correctly reflect the user's current selection on subsequent submissions... Declaring selectedRating inside the function ensures that we always work with the most up-to-date selection made by the user."

- Setting Text Content: You can also use .textContent to replace the existing text within an element. for `.textContent` method.
- `You selected ${selectedRating.value} out of 5`;`
- I'm curious about the relationships between classes in HTML and JavaScript now, it's so different to CSS.
- I'm curious about `display: none;` defaults and overrides between CSS and JS. Their relationship is also different.
- AI: "Think of console.log as your flashlight when navigating through the "dark" parts of your code" Love this

## Continued development

-
-
-

## Useful resources

[How to create a Horizontal List in HTML ?](https://www.geeksforgeeks.org/how-to-create-a-horizontal-list-in-html/)
[HTML Forms](https://www.w3schools.com/html/html_forms.asp)
[](https://discord.com/channels/824970620529279006/1195616458961592380/1195619278192386058)
[Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) Resume at Step 4!
[Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) READ!
[JavaScript Forms](https://www.w3schools.com/js/js_validation.asp)

TO DO

/ Style the default state to completion
/ Style the thank-you state to completion

# interactive-rating-component
