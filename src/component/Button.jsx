const Button = ({text, functionality, color})=>{
    return(
        <button onClick={functionality} className={`w-20 h-10 ${color} header-button`}>
            {text}</button>
    )
}

export default Button