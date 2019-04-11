# resizing

using <a href="https://glitch.com/edit/#!/remix/hickory-knight">this document as a base</a>, make a page that responds to the user resizing the window.

sometimes its enough to design your webpage using `vw`, `vh`, `vmin` or `vmax` instead of pixels in order to get it to resize with the browser window. on this page the font size is set in terms of `vmin`.

another approach to designing a page for different window sizes is to use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media">media queries</a> which let you write css that only applies if the window matches some rules you specified. this page changes when its narrower than `600px`, for example. look at the style.css for that.

finally, you can also do javascript'y things when the page resizes, that let you achieve more complicated effects than you could with just css. for instance, having the font color evenly change based on how tall the window is. check out script.js for that

using these different approaches, make a one page site that responds to the user as they control the window. can you tell a story or create an unexpected interaction with the only input being the window size?

<a href="https://shaded-snowplow.glitch.me/">example outcome</a>

<a href="https://roomy-secure.glitch.me/">another one</a>

have your response to this exercise complete by April 11th