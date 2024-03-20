function publishArticle() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const image = imageInput.files[0];

    if (title && content) {
        const articleList = document.getElementById('articleList');
        const li = document.createElement('li');
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const img = document.createElement('img');

        h3.textContent = title;
        p.textContent = content;

        if (image) {
            const reader = new FileReader();

            reader.onload = function (e) {
                img.src = e.target.result;
            };

            reader.readAsDataURL(image);
        }

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(img);

        li.appendChild(article);
        articleList.appendChild(li);

        // Clear the form fields
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        imageInput.value = '';
    } else {
        alert('Please fill out title and content fields.');
    }
}
