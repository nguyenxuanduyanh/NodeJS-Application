var pageElement = document.querySelector('.pagination');
var totalPages = 8;
var pageText = ''

for (var currentPage = 0; currentPage < totalPages; currentPage += 1) {
    var content = currentPage;

    if (currentPage === 0) {
        content = '&laquo;';
    } else if (currentPage === totalPages - 1) {
        content = '&raquo';
    }


    pageText += '<a href="index/story' + currentPage + '.html">' + content + '</a>\n';

}
pageElement.innerHTML = pageText;