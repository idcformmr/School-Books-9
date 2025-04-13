document.addEventListener('DOMContentLoaded', function () {
    const books =[
        {
           "title":"Алгебра 1ч",
            "author":"Мордкович",
            "img":"../img11/alg1-11.png",
            "pdf":"../books11/alg1-11.pdf"
        },
        {
            "title":"Алгебра 2ч",
            "author":"Мордкович",
            "img":"../img11/alg2-11.png",
            "pdf":"../books11/alg2-11.pdf"
        },
        {
            "title":"Английский",
            "author":"Forward",
            "img":"../img11/angl11.png",
            "pdf":"../books11/angl11.pdf"
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
            "img":"../img11/vseobsh11.png",
            "pdf":"../books11/vseobsh11.pdf"
        },
        {
            "title":"География",
            "author":"Гладкий",
            "img":"../img11/geograf11.png",
            "pdf":"../books11/geograf11.pdf"
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
            "img":"../img11/inf11.png",
            "pdf":"../books11/inf11.pdf"
        },
        {
            "title":"История России",
            "author":"Мединский",
            "img":"../img11/history11.png",
            "pdf":"../books11/history11.pdf"
        },
        {
            "title":"Литература 1ч",
            "author":"Лебедев",
            "img":"../img11/liter1-11.png",
            "pdf":"../books11/liter1-11.pdf"
        },
        {
            "title":"Литература 2ч",
            "author":"Лебедев",
            "img":"../img11/liter2-11.png",
            "pdf":"../books11/liter2-11.pdf"
        },
        {
            "title":"Право 1ч",
            "author":"Певцова",
            "img":"../img11/law1-11.png",
            "pdf":"../books11/law1-11.pdf"
        },
        {
            "title":"Право 2ч",
            "author":"Певцова",
            "img":"../img11/law2-11.png",
            "pdf":"../books11/law2-11.pdf"
        },
    
        {
            "title":"ОБЖ",
            "author":"",
            "img":"../img11/obj11.png",
            "pdf":"../books11/obj11.pdf"
        },
        {
            "title":"Общество",
            "author":"Боголюбов",
            "img":"../img11/social11.png",
            "pdf":"../books11/social11.pdf"
        },
        {
            "title":"Русский язык",
            "author":"Гольцова",
            "img":"../img11/russ2-11.png",
            "pdf":"../books11/russ2-11.pdf"
        },
        {
            "title":"Физика",
            "author":"Мякишев",
            "img":"../img11/physic11.png",
            "pdf":"../books11/physics11.pdf"
        },
        {
            "title":"Химия",
            "author":"Габриелян",
            "img":"../img11/chemis11.png",
            "pdf":"../books11/chemis11.pdf"
        },
        {
            "title":"Экономика",
            "author":"Иванов",
            "img":"../img11/econom11.png",
            "pdf":"../books11/econom11.pdf"
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
  