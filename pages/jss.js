document.addEventListener('DOMContentLoaded', function () {
  const books = [
    {
        "title":"Алгебра 1ч",
        "author":"Мордкович",
        "img":"../img10/Alg1-10.jpg",
        "pdf":"../books10/alg1-10.pdf"
    },
    {
        "title":"Алгебра 2ч",
        "author":"Мордкович",
        "img":"../img10/Alg2-10.jpg",
        "pdf":"../books10/alg2-10.pdf"
    },
    {
        "title":"Английский",
        "author":"Forward",
        "img":"../img10/Engl10.png",
        "pdf":"../books10/engl10.pdf"
    },
    {
        "title":"Биология",
        "author":"Каменский",
        "img":"../img10/Bio10-11.jpg",
        "pdf":"../books10/bio10-11.pdf"
    },  
    {
        "title":"Всеобщая история",
        "author":"Мединский",
        "img":"../img10/general history10.jpg",
        "pdf":"../books10/general history.pdf"
    },
    {
        "title":"География",
        "author":"Гладкий",
        "img":"../img10/geogrf10.jpg",
        "pdf":"../books10/geog10.pdf"
    },
    {
        "title":"Геометрия",
        "author":"Атанасян",
        "img":"../img10/geomet10-11.jpg",
        "pdf":"../books10/geo.pdf"
    },
    {
        "title":"Информатика",
        "author":"Басова",
        "img":"../img10/inf10.jpg",
        "pdf":"../books10/inf.pdf"
    },
    {
        "title":"История России",
        "author":"Мединский",
        "img":"../img10/history of Rus10.jpg",
        "pdf":"../books10/history of Ruse.pdf"
    },
    {
        "title":"Литература 1ч",
        "author":"Лебедев",
        "img":"../img10/liter1-10.jpg",
        "pdf":"../books10/liter1-10.pdf"
    },
    {
        "title":"Литература 2ч",
        "author":"Лебедев",
        "img":"../img10/liter2-10.jpg",
        "pdf":"../books10/liter2-10.pdf"
    },
    {
        "title":"Право 1ч",
        "author":"Певцова",
        "img":"../img10/law1-10.jpg",
        "pdf":"../books10/law1.pdf"
    },
    {
        "title":"Право 2ч",
        "author":"Певцова",
        "img":"../img10/law2-10.jpg",
        "pdf":"../books10/law2.pdf"
    },
    
    {
        "title":"ОБЖ",
        "author":"Смирнов",
        "img":"../img10/obz10.jpg",
        "pdf":"../books10/obz10.pdf"
    },
    {
        "title":"Общество",
        "author":"Боголюбов",
        "img":"../img10/social10.jpg",
        "pdf":"../books10/social10.pdf"
    },
    {
        "title":"Русский",
        "author":"Гольцова",
        "img":"../img10/rus10.jpg",
        "pdf":"../books10/russ.pdf"
    },
    {
        "title":"Физика",
        "author":"Мякишев",
        "img":"../img10/physics10.png",
        "pdf":"../books10/physics.pdf"
    },
    {
        "title":"Химия",
        "author":"Габрелиан",
        "img":"../img10/chemis10.jpg",
        "pdf":"../books10/chemis.pdf"
    },
    {
        "title":"Экономика",
        "author":"Королева",
        "img":"../img10/ekonom10.jpg",
        "pdf":"../books10/ekonom.pdf"
    }
]

  const bookListContainer = document.getElementById('bookList');

  books.forEach(function (book) {
    const bookItem = document.createElement('div');
    bookItem.classList.add('col-12', 'col-md-4', 'mb-3');

    const bookContent = `
          <div class="card">
              <img src="${book.img}" class="card-img-top" alt="${book.title}">
              <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">Автор: ${book.author}</p>
                  <a href="${book.pdf}" class="btn btn-primary" target="_blank">Открыть PDF</a>
              </div>
          </div>
      `;

    bookItem.innerHTML = bookContent;

    bookListContainer.appendChild(bookItem);
  });
});
