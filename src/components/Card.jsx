import './Card.css';

export default function Card (props) {
    return (
        <section className='hero'>
            <h2>{props.name}</h2>
            <div><b>Вселенная:</b> {props.universe}</div>
            <div><b>Альтер эго:</b> {props.alterego}</div>
            <div><b>Род деятельности:</b> {props.occupation}</div>
            <div><b>Друзья:</b> {props.friends}</div>
            <div><b>Суперсилы:</b> {props.superpowers}</div>
            <img className='img' src={props.url} alt={props.name}/>
            <div className='text'><b>Дополнительные сведения:</b> {props.info}</div>
        </section>
    )
}