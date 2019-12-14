![CountryLookup](logo.svg)  
  
## Run  
  
`npm i`, just in case I ever have dependencies. `npm build` is for now.sh, don't run it, it'll delete the nearest `public` folder. Now you can deploy, preferably the entire thing, to a static server, but not your filesystem. Browsers can't handle coolness, and can't handle links beginning when a `/` (slash). This app has lots of both.  
  
**Pre-deployed at https://countrylookup.now.sh**

The following text are the answers for the initial questionnaire for participation in Seedling School.

## Elevator Pitch

CountryLookup helps you to find the most important information about a country without reading an entire Wikipedia page. Among others, things like languages, currencies, and even demonyms (Demonym Example: Germany => German, Italy => Italian).

## What is your motivation for creating this project?

First of all, I want to improve my personal frameworkless skills, and provide a friendly frontend to REST Countries, the API I am going to be using.

## How will users interact with your web site?
  
A simple search bar, the user will get back cards with requested data.  
It's live updating, but respecting the ratelimits.

## What 3rd Party API(s) will you integrate with?

At the moment, [REST Countries](https://restcountries.eu/).

## Tech Stack

> CSS Framework will you use - or no framework  
  
Bulma, installed via npm
> Any 3rd party JS libraries like maps, data viz etc.  
  
REST Countries doesn't seem to serve any visualisable data, however it seems like I could use a map to show the position of the country on Earth. 

## What will be your process?

> What project management tool will you use?  
  
An internal Taiga (Trello-like) board.  
> How often will you commit your code?  
  

I usually divide my coding in unlimited-time "sessions". A session is starting and stopping when I feel like it. Code should be commited when the MVP is ready, and at the end of every session from that moment on. Hotfixes, like ones that fix a thing being absolutely broken, are commited ASAP.  

> How will you test your web site?  
  
By testing it in Firefox, then Chromium. I am not going to implement any E2E or Unit tests due to lack of knowledge on that matter.  
  
> How will you design the layout of your website? Will you use a wireframing tool? Will you draw it on paper?  
  
I have created a wireframe with Inkscape (= svg), it's in the root of this repository as `wireframe.svg`.