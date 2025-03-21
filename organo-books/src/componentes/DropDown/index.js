import './DropDown.css'

const DropDown = (props) => {
        return (
                <div className='drop-down'>
                        <label>{props.label}</label>
                        <select onChange={evento => props.onChange(evento.target.value)} required={props.mandatory} value={props.value}>
                                {props.itens.map(item => {
                                        return <option key={item}>{item}</option>
                                        })}
                        </select>
                </div>
        )
}

export default DropDown