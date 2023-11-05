$('form').submit(function (e) {
    e.preventDefault();
    $.post('/api/url/shorten', { originalUrl: $('input').val() }, function (data) {
        // Display the shortened URL to the user
        alert('Shortened URL: ' + data.shortUrl);
    });
});