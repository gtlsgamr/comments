# comments.
***still under work, feel free to fork. Pull requests are welcome.***

A FREE/Libre commenting engine that is lightweight, serverless, and possibly ~~doesn't~~ requires wonky workarounds.

![guycomputer](https://www.hitarththummar.xyz/images/guycomputer.gif)
## How it works
This engine is **NOT** fully automated. It relies on the site owner to do some manual work, but this was the only way to make sure that it stayed lightweight, and serverless.

There are two ways it can work:

### Manual E-mails

The site owner creates a comment entry form and puts it in the pages where they want the comments to be shown. A sample is shown in `sample.html` file.

This way relies on the site visitors to E-mail the comment to the site owner. Whenever a user enters a comment in the comment box and clicks submit, it will open a pop up, asking the user to open their mail client with a pre-formatted message to the site owner. The user has to click OK and send. 

If the user chooses to not open their mail client or they don't have one, the pre-formatted message will be copied to their clipboard which they can send manually to the site owner.

Once the site owner receives the message, which has a javascript object, they can paste that object in the `comments-data.js` file and rebuild their site. The comments will show up on the specified page.

### Pastebin (WIP)

This process is similar to the Manual one, except here the user doesn't have to do anything. They press the submit button and the program will send the data to a paste page url provided by the site owner. The paste page will also be made by me and added here later. This method is still a WIP.

Although this method won't be ***truly*** serverless.
### Dependencies

This software requires [showdownjs](https://github.com/showdownjs/showdown/) to convert markdown comments into html. ***You can ignore this if you don't want markdown support.***
It also requires jquery.

### Install

```
1. Make sure all dependencies are linked in the head or foot of your page.
2. Link comments.js and comments-data.js in your page.
3. Change the config variables in comments.js according to your needs.
4. Add the sample.html or equivalent code in your page.
```


