import React, {useState}from 'react';
const FormTodo = (props)=>{
    const [description, setDescription] = useState("");
    const {handleAddItem} = props;
    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            done:false,
            id:(+new Date()).toString(),
            description
        });
        setDescription("");
        
        
    }
        return (
            <form onSubmit={handleSubmit}>
                <div className="todo-list">FormTodo!
                    <div className="file-list">
                        <input
                            type="text"
                            className="text"
                            value = {description}
                            onChange = {e => setDescription(e.target.value)}
                        />
                        <button
                            className = "button pink"
                            disabled = {description ? "": "disable"}
                        >
                            Add
                        </button>
                    </div>
                </div>  
            </form>
            
            )

}
export default FormTodo;