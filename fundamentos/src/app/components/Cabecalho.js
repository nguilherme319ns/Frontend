export default function Cabecalho(props){
    props.titulo
    return (
        <>
            <div>
                <h1 className="text-success">{props.titulo}</h1>
                <p>{props.sub}</p>
            </div>
        </>
    )
}