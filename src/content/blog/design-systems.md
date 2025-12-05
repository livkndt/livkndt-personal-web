---
title: 'Working in Harmony: Using Design Systems for Better Collaboration'
description: 'This was a guest blog post 
for BCG Digital Ventures'' blog on Medium. I talk about our experience of building a Design System early, and how that 
can enable en'
pubDate: '2019-03-20'
author: 'Olivia Knoedt'
image: 'https://d19w7e3j8gkywb.cloudfront.net/posts/design-systems-hero.jpeg'
tags: ['writing']
draft: false
---

 
This was a [guest blog post](https://medium.com/bcgdv-engineering/working-in-harmony-using-design-systems-for-better-collaboration-57a5dae53d65) 
for BCG Digital Ventures' blog on Medium. I talk about our experience of building a Design System early, and how that 
can enable engineers and designers to collaborate more efficiently and creatively.

# Working in Harmony: Using Design Systems for Better Collaboration
> How building a Design System early on can enable engineers and designers to collaborate more efficiently and creatively.

_By Olivia Graham, Senior Engineer, BCG Digital Ventures_

This article is based on a talk I gave last November at BCG Digital Ventures Berlin's first engineering conference, 
Hive. It's built upon a body of work and insights from engineers and designers across the company.

At BCG Digital Ventures, we have to move fast to build a market-ready MVP (Minimum Viable Product) to launch into 
the market within six to nine months. The MVP needs to reach a high level of quality to allow the product and new 
company to quickly and easily scale. During that time, we have to manage a lot of ambiguity, which can cause stress, 
and things don't always run smoothly. One outcome of this can be a breakdown in communication within the team.

I work primarily as a frontend engineer, so I need to collaborate especially closely with designers to create a 
successful product. While each of us in the team might have our own areas of expertise and focus, we all have the 
same goals: To move fast, build an amazing user experience, maintain an efficient workflow and enjoy working together. 
We have to consciously work together to achieve these goals and foster successful collaboration between disciplines.

## Different Approaches to Problem Solving
A common theme I've encountered across teams and companies is poor communication between designers and engineers. 
Sometimes this takes the form of frustration, arguments and a lot of back-and-forth in the design/implementation process.

Building a frontend for an MVP in a few short months hinges on efficient collaboration between engineers and designers. 
It's a stereotype that engineers are bad communicators, and for me personally this becomes a reality when I'm under 
stress. But the frictions that appear between designers and engineers are not because engineers are innately bad at 
communicating. In fact, they're due to the nature of our different specialties. We have different focuses, different 
motivations and very different approaches to problem-solving. Fortunately, we have a shared aim: to build an awesome 
product. We just have to find creative ways to collaborate better and make sure we stay on the same page.

At BCG Digital Ventures, we build multiple ventures in quick succession. This gives us the unique opportunity to 
reflect on our process and culture, and work out how we can make it even better on the next venture build. After 
many of us experienced the same frictions on ventures, we gathered together a group of designers and engineers and 
tried different, creative approaches to improving our synergy. Over time, one idea kept coming back and became a 
key part of our process: designers and frontend engineers working on design systems together whilst building out 
the MVP for a venture.

## Starting Out With a Design System
A common workflow for a new feature in many product teams is for the design team to build screens and, once the 
screens are signed off, pass them on to the frontend team to build.

This causes some issues.

Conceptually, when we think only in screens, we do not gain a deeper understanding of the individual parts and how 
they fit together. This can lead to UI inconsistencies and bugs. Features that span multiple pages (e.g. a sidebar) 
can become an afterthought to the page rather than being considered carefully. At the core of the software development 
mindset are the ideas of modularity and reusability — we do this in our code, and it makes sense to do it 
in our design too.

In addition to the conceptual problems, this process doesn't help to foster communication. It encourages us to 
complete work alone and stick mostly within our own discipline. Only once we are finished do we share and discuss. 
This increases the likelihood of disagreements being taken personally, because it can be hard to have something 
you've worked hard on criticised — working separately reduces empathy. Working in silos also means we refer to 
components and concepts differently and imagine the implementation of states and animations differently. We speak 
different languages even though we are talking about the same product.

At BCG Digital Ventures, we decided to trial a new way of working together during the MVP product build phase: 
To build a design system together from the beginning, focus on modular design and explore ways to communicate 
and collaborate better as one team.

So what exactly is a design system? If you look online, you'll find that it's a somewhat vague concept with 
many definitions. Taking inspiration from multiple sources, our team settled on the following definition: A 
set of patterns (within design and code) and principles that represent the whole product ecosystem, including 
its values, brand, tone of voice and the user experience we want to create. A design system guides how we design 
and develop our products.

The benefits of a design system are many. It creates a more consistent UI/UX, which the user is able to master more 
quickly. It's faster to design and build when you're not reinventing the wheel and this also leads to fewer bugs 
(reusing patterns and focusing on distinct components make it more manageable to implement different forms of 
testing and add accessibility). Putting those reusable, well-tested components into a component/pattern library 
creates a shared vocabulary for everyone in the organisation, making it easier to communicate about the product.

It also informs designers and engineers about what we have available to use and the best practices to follow, 
which serves as a great onboarding tool and leads to more thoughtful decisions from everyone in the team about 
making changes or adding new content to the product.

## Creating a Shared Language
For most of us, this was the first time building a design system, so we took a pragmatic approach to trial 
the system and to learn from one other. We took the very first sprint to focus on the design system and 
began by running several workshops together to identify and discuss all of our existing UI patterns (components), 
discuss what our style guide should be composed of, come up with naming conventions (e.g. for our colour palette), 
set out principles for the design system and decide how we'd work together as a team.

It was a process of reciprocal knowledge transfer. As engineers, we got a deeper understanding of the way our 
designers think and approach design, and in return they got an insight into the technical side and how we structure 
code and components. We came to an agreement on how to organize the way we work and how to structure our product, 
giving ownership to all parties. This helped us build a shared language across disciplines.

![Existing design broken down into individual components](https://d19w7e3j8gkywb.cloudfront.net/posts/design-systems-1.png)
*Existing design broken down into individual components*

## Iteration and Improvement
We built the design system into our process so that we could easily maintain and develop it. We focused on design 
and engineering iterating together by having feasibility reviews early on and spending time to identify UI patterns 
and possible changes to the design system.

When we identify new components, we make sure that a designer and an engineer work together to make sure that 
animations, states, accessibility and other elements are considered, and the new component is added to the 
component library.

We think of the design system as a product — there should be a good reason for components to change, not to 
hinder innovation, but to avoid unnecessary and unclear changes that waste time and effort.

## The Not-So-Secret Secret
At the heart of what has been successful trialling design systems in this venture is more communication, more 
often and more freely. This involves designers and engineers sitting together to complete components, knowledge 
sharing sessions that give insight and empower one another and talking face-to-face. We have to practice daily, 
deeper communication and collaboration, explaining our own thought processes and ideas. That's how we improve.

Building a design system as a first step has helped us to create a shared language and a platform for deeper 
collaboration. Building a style guide and component library from the beginning helped us to increase efficiency 
and quality, but the long-term success of the product and the company hinges on the people and their ability to 
communicate.

## The Future for Design Systems @ BCG Digital Ventures
Here in Berlin, we are working hard to document what we learn from this approach and looking at how we can abstract 
reusable elements. We'll soon evaluate the effect this initiative has had on this venture and consider the potential 
for expansion in the future.

We have a design system sketch template which is coupled with the Vue Starter project. You can check it out here to 
see what a Storybook component library looks like.

Seeing how a simple change in approach can make a big improvement in cross-discipline communication has been inspiring, 
and I'm excited to see how we can continue to improve our working process to build better products through practical 
and creative collaboration.

![Screenshot of the design system in Storybook](https://d19w7e3j8gkywb.cloudfront.net/posts/design-systems-2.png)
*Screenshot of the design system in Storybook*
