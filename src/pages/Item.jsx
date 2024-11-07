function Item({
    title,
    description,
    isDone,
    onDoneChange,
    handleRemove
}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>is Done</span>
            <input type='checkbox' checked={isDone} 
            onChange={onDoneChange}
            />
            <button type="button" onClick={handleRemove}>Remove</button>
        </div>
    )
}
export default Item;