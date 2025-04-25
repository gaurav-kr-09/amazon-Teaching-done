const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

//xhr.response // asynchronus. ye load hone me bahut time lagayega and computer response mar k aage badh jayega isiliye isko eventlistner me dalenge taki computer iske execute hone ka wait kre.

// xhr.open('GET', 'https://supersimplebackend.dev/hello');
// xhr.send();

// xhr.open('GET', 'https://supersimplebackend.dev/products/first');
// xhr.send();

// xhr.open('GET', 'https://supersimplebackend.dev/not-supported'); //error
// xhr.send();

// xhr.open('GET', 'https://supersimplebackend.dev/products/first'); 
// xhr.send();

// xhr.open('GET', 'https://supersimplebackend.dev/documentation'); 
// xhr.send();

// xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg'); 
// xhr.send();