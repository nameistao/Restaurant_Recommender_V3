## Project Name & Pitch

Restaurant Recommender

A web app that recommends nearby restaurants based on user location, built with Next, React, TypeScript, Styled Components, and GraphQL.

## Project Context

This was a personal project built during my free time. The purpose is to help those who have difficulty picking a restaurant. The main project goal was to solidify my understanding of some languages, frameworks, best practices, and tools I have been exposed to so far through self-taught courses.

## Reflection

#### Unexpected Challenges:
  - I noticed that on the initial page load and whenever a new user request is sent for a restaurant recommendation, the recommendation content did not indicate loading, which made for a bad user experience. This led to a reaserch spike into how other web and mobile applications such as zillow.com or the Chase banking app address this issue. I found that they use an approach called skeleton loading, which shows an animated content skeleton in place of the data while the data is being fetched.
  - Often times I would come up with ideas for improvements and wanted a good place for tracking those ideas like Jira. I found the Issues and Projects feature on GitHub to be a good alternative.
  - Using CSS grid becomes pretty tedious when used in conjunction with React and Styled Compoentns. Flexbox is a much more convenient alternative and is just as flexible.
  - Using icons that come in PNG format causes the initial load of the site to be slower. I found that converting the PNGs to SVGs are always better for client-side performance.
  - SVG files themselves seems to have statically set sizes and colors. If I wanted to change the size or color, I had to change the actual SVG file. The solution I found was to convert the SVGs into React components that take in props for the height, width, and colors.

#### What I Learned/Improved Upon:
  - Skeleton Loading
  - Creating Test Suites
  - Creating Progressive Web App
  - Deploying to Vercel
  - GraphQL
  - Using React with TypeScript
  - Writing a proper Readme
  - SVGs and to use them whenever possible
