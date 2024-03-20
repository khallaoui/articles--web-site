// Shared script logic for both publishing and displaying articles
const articles = [];

function clearFormFields() {
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
}

function createArticleElement(article) {
    const li = document.createElement('li');
    const articleElement = document.createElement('article');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');

    h3.textContent = article.title;
    p.textContent = article.content;

    if (article.image) {
        img.src = article.image;
        img.alt = 'Article Image';
        articleElement.appendChild(img);
    }

    articleElement.appendChild(h3);
    articleElement.appendChild(p);
    li.appendChild(articleElement);

    return li;
}

function publishArticle() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const image = imageInput.files[0];

    if (title && content) {
        const articleList = document.getElementById('articleList');
        const li = createArticleElement({ title, content, image });

        articleList.appendChild(li);

        // Clear the form fields
        clearFormFields();
    } else {
        alert('Please fill out title and content fields.');
    }
}
