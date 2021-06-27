
var inputOne = document.getElementById("input-one")
var countEl = document.getElementById("count-el")
var numBooks = document.getElementById("number-books")

books = {
    count : 0,
    storage: {},

    //Adds a new book onto the stack
    push: function (value){
        this.storage[this.count] = value
        this.count++
    },

    //removes a book from the top
   pop: function(){
        if(this.count == 0){
            return undefined
        }

        this.count--
        result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    },

    size: function(){
        return this.count
    },

    peek: function(){
        if(!this.storage[this.count-1]){
            return("No Books Acumulated")
        }
        console.log(this.storage[this.count-1])
        return this.storage[this.count-1]
    }
}

function incrementBook(){
    let book = inputOne.value
    // console.log(book)

    if(book == ''){
        countEl.innerText = books.peek()
        numBooks.innerText = books.size()
    }
    else{
        books.push(book)
        countEl.innerText = books.peek()
        numBooks.innerText = books.size()

    }
}

function removeBook(){
    books.pop()
    console.log(books.storage)
    countEl.innerText = books.peek()
    numBooks.innerText = books.size()
}
