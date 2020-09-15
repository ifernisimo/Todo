
import {connect} from "react-redux";
import {compose} from "redux";
import {addNewTodo} from "../../store/reducers/todo-reducer";
import AddTodoComponent from "./AddTodoComponent";

const mapStateToProps = (state) => ({

})


const AddTodoComponentContainer =  compose(connect(mapStateToProps, {addNewTodo}))(AddTodoComponent);
export default  AddTodoComponentContainer;