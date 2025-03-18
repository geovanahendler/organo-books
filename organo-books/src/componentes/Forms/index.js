import "./Forms.css";
import {useState} from 'react'
import FieldText from "../FieldText";
import DropDown from "../DropDown";
import Botton from "../Botton";

const Forms = (props) => {

  const categorys = [
    'Romance',
    'Fiction',
    'Non-Fiction',
    'Mystery & Thriller',
    'Science Fiction & Fantasy',
    'Historical Fiction',
    'Biography & Memoir',
    'Self-Help & Personal Development',
    'Young Adult (YA)',
    'Horror & Suspense'
  ]

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [cover, setCover] = useState('')
  const [category, setCategory] = useState('')
 
  const saving = (evento) => {
    evento.preventDefault()
    props.registeredBook({
      title,
      author,
      cover,
      category
    })
  }

  return (
    <section className="forms">
      <form onSubmit={saving}>
        <h2>Fill in the details to create the new book card</h2>
        <FieldText 
          mandatory='true' 
          label="Book Title" 
          placeholder="Enter the name of the book"
          value={title}
          onChange={value => setTitle(value)}
        />

        <FieldText 
          mandatory='true'
          label="Author"
          placeholder="Enter the name of author"
          value={author}
          onChange={value => setAuthor(value)}
        />

        <FieldText 
          label="Book cover" 
          placeholder="Enter the http book cover"
          value={cover}
          onChange={value => setCover(value)}
        />

        <DropDown 
          mandatory='true' 
          label="Book category" 
          itens={categorys}
          valor={category}
          onChange={value => setCategory(value)}
        />

        <Botton>Create Book</Botton>
      </form>
    </section>
  );
};

export default Forms;
