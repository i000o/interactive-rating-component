# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
- [Focus](#focus)
- [Outcome](#outcome)
- [Process](#process)
- [Built with](#built-with)
<!-- - [Feedback](#feedback) -->
- [Lessons](#lessons)
- [Development](#development)
- [Useful resources](#useful-resources)

## Overview

This challenge is to design and build an interactive rating component for web desktop & mobile. It will be my first time using JS for a project after spending time gaining confidence in front-end static styling.

## Focus

My focus here is to write good and functioning JS that is clear, concise and uncomplicated.

## Outcome

![](images/rating-desktop.png)

:jigsaw: [Live Site URL](https://i000o.github.io/interactive-rating-component/)  
:pencil2: [Solution URL]()

## Built with

:gear: Semantic HTML5 markup  
:gear: CSS  
:gear: Desktop-first workflow  
:gear: Sass  
:gear: JavaScript

## Process

1. I structured the HTML planning ahead for functionality.
2. I imported my typical resets in Sass.
3. I researched HTML Forms, with `<input>` and `<label>` pairs after previously setting up an `<ul>` of `<buttons>`.
4. I researched Event Listeners in Javascript with the `.addEventListener` method.
5. I researched triggering a function upon Submit with the parameter `"submit"` as event type and `function(e)` as the callback function.
6. I continually refined my JS by adding more variables and lines like `e.preventDefault();` for instance. This also included the function for the feedback "You selected X out of 5". I made a variable called `selectedRating` and used the line `selectedRating.textContent = selectedRating.value;`.
7. I experimented with using a "Please choose a rating" message if user hits Submit with no rating, but decided against this for design simplicity for now.
8. For a while, the page wasn't registering `input 1` but it was all the others. Turned out, I had a small HTML syntax error so that was easily fixed.
9. I learnt about `appearance: none` on radio buttons and that they're "used to adjust "platform-native styling based on the user's operating system".
10. I applied `box-shadow` to elements to create the gradient in the container and around the buttons and star icon.
11. I added `:checked` and `:focus-visible` states.
12. I styled the `thank-you` card.
13. Refined my Sass to clean up my CSS file.
14. I couldn't figure out the exact `box-shadow` set up in the design, particularly for the Thank-you state. I'll ask for feedback on this.

## Time taken

:timer_clock: Estimation: 8-10hrs

- Desktop:
- Mobile:

<!-- ## Feedback -->

## Lessons

- `.querySelector` vs. `.getElementByID`.
- Event Listeners.
- Callback functions as functions that take place within/after another function.
- `event.preventDefault()` to prevent default event behaviour. In this instance, to have the event function pass on the same webpage, not to load another.
- In JS, we refer to class names with a dot.
- Link to JS in `<head>` section of HTML, using `<script>` tag and `src=` attribute.
- Application of Scope -

_"Scope: By declaring `selectedRating` within the function, we make sure that it is scoped to that function and gets updated each time the event listener runs. If it were declared outside the function, it might not correctly reflect the user's current selection on subsequent submissions... Declaring selectedRating inside the function ensures that we always work with the most up-to-date selection made by the user."_

- You can use the `.textContent` method to replace the existing text within an element.
- Using `template literals` in "You selected `${selectedRating.value}` out of 5".
- I'm curious about the relationships between classes in HTML and JavaScript now, it's so different to CSS.
- I'm curious about `display: none;` defaults and overrides between CSS and JS. Their relationship is also different.
- AI: _"Think of console.log as your flashlight when navigating through the "dark" parts of your code"._ I love this analogy. :flashlight:
- Syntax for `attribute selector` in CSS is `[]` like in `input[type="radio]`.
- `inset` on `box-shadow` to make the shadow cover the inside, not outer edge of box/container.
- The difference between `:checked` vs. `:active`, the latter being a more momentary state.
- Next sibling combinator `+` in CSS as in `input[type="radio"]:checked + label`.

## Development

- I'd like to continue using Copilot to help me Javascript. It was very useful to me in breaking down syntax and answering my questions about why we make certain use of Javascript in various situations. This took me from not being able to write JS from scratch to gathering a code block that I could understand slowly.
- I want to remain very curious about Javascript and how it works. I've come a long way with HTML & CSS and I want to build this same confidence in Javascript. I understand that as an OOP, it's a different beast, :dragon: but I want to bring my inquisiveness to this language too, even more so. I want to understand what Javascript I'm writing and why, not just be able to produce it without deeper curiosity.
- I'm getting excited about writing more complex programs now :slightly_smiling_face:
- I'd like to start forking my own repos to experiment with different outcomes while preserving my code base so I can easily retract changes. This will allow me more practice for submitting and merging pull requests, as well.

## Useful resources

Microsoft Copilot - AI Assistance
Frontend Mentor Discord on this solution  
[HTML Forms](https://www.w3schools.com/html/html_forms.asp)  
[Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/)  
[Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) READ!  
[JavaScript Forms](https://www.w3schools.com/js/js_validation.asp)

# interactive-rating-component
