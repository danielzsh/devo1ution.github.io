---
layout: post
title: "Keeping Track of Tabs"
date: 2020-09-02
section: Blog
image: "/images/html.png"
tags: [html]
---
Today, I found out how to keep track of which tab on your site is current selected!<br>
![My nav bar](/images/nav.png)<br>
<span class="caption">My tabs</span><br>
As you probably know, on this website, if you select a tab, it will stand out from the others.<br>
![One tab is selected](/images/nav-selected.png)<br>
<span class="caption">One tab is selected</span><br>
While this may not be the best way, a simple use of Javscript's for loops can do the trick.<br>
# The Idea
I thought a good way to tackle this problem would be to check the current page-url, then check which page was selected.
# The Implementation
Each tab at the top was given an id corresponding to its href/link attribute. So, the home button was given the "/" id, the blog button was given the "/blog/" id, etc. Next, I used a JavaScript script to cycle through all the buttons to see if the link matched.
```
function checkSelected() {
	var buttons = ['/', '/blog/', '/games/'];
	var x;
	for (x of buttons) {
		if (window.location.href == (window.location.origin + x)) 
            document.getElementById(x).classList.add("current");
	}
}
```