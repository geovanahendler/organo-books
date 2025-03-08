import "./Forms.css";
import FieldText from "../FieldText";
import DropDown from "../DropDown";
import Botton from "../Botton";

const Forms = () => {

  const category = [
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

  const saving = (evento) => {
    evento.preventDefault()
    console.log('Forms submit')
  }

  return (
    <section className="forms">
      <form onSubmit={saving}>
        <h2>Fill in the details to create the new book card</h2>
        <FieldText mandatory='true' label="Book Title" placeholder="Enter the name of the book"/>
        <FieldText mandatory='true' label="Author" placeholder="Enter the name of author" />
        <FieldText label="Book cover" placeholder="Enter the http book cover" />
        <DropDown mandatory='true' label="Book category" itens={category}/>
        <Botton>Create Book</Botton>
      </form>
    </section>
  );
};

export default Forms;
