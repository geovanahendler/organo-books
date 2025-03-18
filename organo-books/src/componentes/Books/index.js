import './Books.css'

const Books = (props) => {
        return(
                <section className='books' style={{ backgroundColor: props.secondColor }}>
                        <h3 style={{ borderColor: props.firstColor }}>{props.category}</h3>
                </section>
        )
}

export default Books