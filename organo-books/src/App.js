import { useState } from "react";
import Banner from "./componentes/Banner";
import Forms from "./componentes/Forms";
import Books from "./componentes/Books";

function App() {

  const categorys = [
    {
      nome: 'Romance',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'},
      {
        nome: 'Fiction',
        firstColor: '#E06B69',
        secondColor: '#FDE7E8'},
        {
          nome: 'Non-Fiction',
          firstColor: '#82CFFA',
          secondColor: '#E8F8FF'},
          {
            nome: 'Mystery & Thriller',
            firstColor: '#A62157',
            secondColor: '#F0F8E2'},
            {
              nome: 'Science Fiction & Fantasy',
              firstColor: '#E06B69',
              secondColor: '#FDE7E8'},
              {
                nome: 'Historical Fiction',
                firstColor: '#57C278',
                secondColor: '#F0F8E2'},
                {
                  nome: 'Biography & Memoir',
                  firstColor: '#DB6EBF',
                  secondColor: '#FAE9F5'},
                  {
                    nome: 'Self-Help & Personal Development',
                    firstColor: '#FFBA05',
                    secondColor: '#FFF5D9'},
                    {
                      nome: 'Young Adult (YA)',
                      firstColor: '#FFBA29',
                      secondColor: '#FFEEDF'},
                      {
                        nome: 'Horror & Suspense',
                        firstColor: '#DB6EBF',
                        secondColor: '#FAE9F5'},
                                                      
                                                

  ]

    const [books, setBooks] = useState([])

    const newBookAdd = (book) => {
      console.log(book)
      setBooks([...books, book])
    }

  return (
    <div className="App">
      <Banner />
      <Forms registeredBook={book => newBookAdd(book)} />
      {categorys.map(books  => <Books key={books.nome} category={books.nome} firstColor={books.firstColor} secondColor={books.secondColor}/>)}
    </div>
  );
}

export default App;
