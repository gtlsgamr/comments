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
