const TodoNew = (props) => {

    const { addNewToDo } = props;
    // addNewToDo("VPManh")

    const handleOnClick = () => {
        alert("click add new")
    }

    const handleOnChange = (name) =>{
        console.log(">>> handleOnChange ", name)
    }

    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event)=>{handleOnChange(event.target.value)}}
            />
            <button
                onClick={handleOnClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;
