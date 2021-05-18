# The Plan

This file is a resource to see the progress on the project and how it progresses. It will be updated whenever a new development comes in or a new feature is added. I don't have any idea how this is gonna work, but I will try my best to document the making of this piece of software as detailed as possible.


Currently the idea is to have a static js file that does all the work. It will have all the html components as well as ways to update the comment sections inside the one single file.

I am still not sure on where I want trailing comments or not, if I do, it might get a little tricky. So keeping it simple, singular comments for now. 

```
        [comments.js file] <----------------------|
                |                                 |
	        |                                 |
                V                                 V
User --> Comment Component --> [Datafile where the comments will be stored]
                                                    |
  ^                                                 |
  |_________________________________________________|


```

According to the diagram above, We need a way to push changes to the site folder. This can either be done by having a json file that is pushed to git when the comments are changed, but that will require access to the github repo and that is not something desirable. 

All comments will have a uid, all pages will have a uid.

### Currently viable options: 
- a p2p db file that stores the comment data. [might have security issues.]
- blockchain? very unlikely.
- Storing data in a system environment variable? Not sure if hosts support this, but if they did, this can be done.
- Using a free alternative to github, such as [notabug](https://notabug.org)
- Serverless function (**Most viable**)
---
~~As of today, 11th May 2021, I have decided to go with serverless functions. They are cheaper than actual servers, and are available free of cost at many providers. So serverless functions it is then.~~

Whoops. Change of plans. To make this truly FOSS, I am removing **ALL** Dependencies on non-free software. That is why I have removed the part of not requiring wonky workarounds from the description. 

### Final Plan

**Here is the work flow:**
- The site owner links the javascript on their blog page.
- The script will look for the json file in the site directory and populate comments based on current url.
- The script will also create a comments box, with inputs for alias and comment. Once the user enters their alias and comment and clicks submit, there are 2 paths that the script might take:
	1. Pressing the submit button will open the user's mail client/ask the user to mail a dynamically generated diff file that can be sent to the site owner. Once it is sent to them, they can apply that diff file and rebuild the site. This is a wonky workaround but it is entirely FOSS and free from dependency, not very user-friendly though. **Implemented!**
	2. Pressing the submit button will create the diff internally, and sent it to a unique link at a FOSS pastebin, that is set by the user. I am planning to host the pastebin by myself for now.**will implement soon!(TM)**
- I will be keeping both options open for site owners.

