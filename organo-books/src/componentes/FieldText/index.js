import './FieldText.css'


const FieldText = (props) => {

        const aoDigitado = (evento) => {
                props.onChange(evento.target.value)
        }

        return (
                <div className='field-text'>
                        <label>{props.label}</label>
                        <input value={props.value} onChange={aoDigitado} required={props.mandatory} placeholder={props.placeholder} />
                </div>
        )
}

export default FieldText