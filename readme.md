run in postman

1 api post

/*fetching N news articles*/

localhost:3000/newsArticles/:number 
where number is the numbers of news Articles you have to see it is between 1-10 because of free account so it is handle in code to view only 1-10 articles at a time

for Example: localhost:3000/newsArticles/1

2 get api

/*finding a news article with a specific title or author*/
localhost:3000/newsArticles

author and title with same name in quary params 
for example:{
    author:TechCrunch
    title:m   // you can give substring
}

atleast 1 is required


3 get api
/* searching by keywords*/
keyword with same name in quary params like news, tecnology etc



i know to use redis but its is closed so i have not use cache in this







