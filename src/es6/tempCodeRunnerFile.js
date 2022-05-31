function* helloWorld(){
        if(true){
            yield 'Hello, ';
        }
        if(true){
            yield 'World';
        }
    };

    const generetorHello = helloWorld();
    console.log(generetorHello.next().value);
    console.log(generetorHello.next().value);
    console.log(generetorHello.next().value);