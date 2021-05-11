/*
comments.json is of the format: 
[
  {
    "postId": url,
    "date": 20210511111856
    "alias": John Doe
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
]
*/

const COMMENTPATH = "/comments.json"
const EMAIL = "hittarththummarcoc@gmail.com"

var url = encodeURI(window.location.href);
//Code to add comments recursively




//Code for creating diff files
function jsonCreator(alias,comment){
	var result = {
	"postId": url,
	"time": new Date(),
	"alias":alias,
	"body":comment,
	};

	console.log(JSON.stringify(result));
	
};


