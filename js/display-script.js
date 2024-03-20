// display-script.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display articles
    const publishedArticleList = document.getElementById('publishedArticleList');

    // Assuming you have a function to fetch articles from a server or another source
    function fetchArticles() {
        // Replace this with your actual logic to fetch articles
        const sampleArticles = [
            { title: 'Sample Article 1', content: 'This is the content of Sample Article 1.' },
            { title: 'Sample Article 2', content: 'This is the content of Sample Article 2.' },
            { title: 'Sample Article 3', content: 'This is the content of Sample Article 3.' }
        ];

        displayArticles(sampleArticles);
    }

    // Display articles on the page
    function displayArticles(articles) {
        articles.forEach(article => {
            const li = createArticleElement(article);
            publishedArticleList.appendChild(li);
        });
    }

    // Call the fetchArticles function to initially display articles
    fetchArticles();
});
