const TodoData = (props) => {
    console.log("check props: ",props);

    // props là 1 biến Object
    // cách sử dụng props, hoặc có thể sử dụng {props.name} như bên JAVA, vì props là 1 biến Object
    const {name,age,data} = props;

    return (
        <div className='todo-data'>
            <div>My name is: {name} </div>
            <div> Learning React </div>
            <div> Watching Youtube</div>
        </div>
    )
}

export default TodoData;
