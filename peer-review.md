## P3 Peer Review

+ Reviewer's name: Gerald Walden
+ Reviewee's name: Gabe Sousa
+ URL to reviewee's Github repo: *https://github.com/ghsousa/e28/tree/master/p3*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*

### Are you able to produce any errors or unexpected results?
Apache config-related Routing error described in this post on the class GitHub issues forum:
https://github.com/susanBuck/e28-fall19/issues/147


### Were there any parts of the interface that you found confusing or unclear?
The navigation is very straightforward and functional. One slight stylistic error which emerged in the "Introduction to Single File Components" post: the `code` markup from the .md files was converted to `<code>` elements in the HTML, but due to the CSS rules in effect being targeted to '<code>' elements in general, individual words and code-blocks alike had the same style applied to them. This means that the word "vue" and the word "scoped" are not displaying as inline text but as code-blocks. This would be easy to overlook since the styles do display differently when  _SFC.md_ is viewed in GitHub (in the raw markup, inline code-style is bracketed with one tick, code-block style bracketed with three ticks).

To fix this, I would suggest changing the CSS so that the styles which are now applied to all 'code' elements are instead applied to 'code' elements with class `language-vue`. 

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
Perhaps a comment in `main.js` explaining the use of VueMarkdownLoader; I hadn't heard of it before and it did introduce a different syntax to some of the import statements. Luckily Gabe mentions in the blog itself that he is using this tool, so it worked out O.K. Otherwise, the code is pretty straightforward but there really aren't any comments used.  

### Are there any parts of the code that you found interesting or taught you something new?
Yes, I didn't know one could use .md files as a source of content, so it was interesting to learn of the existence of _VueMarkdownLoader_ and also to then look into how it worked.  

### Are there any best practices discussed in course material that you feel were not addressed in the code?
Nothing major comes to mind; it's always good to be in the habit of commenting one's code. 

### Do you have any additional comments not covered in the above questions?
I haven't used CSS Grid before, and the "intro to" post about it was well written and informative.
