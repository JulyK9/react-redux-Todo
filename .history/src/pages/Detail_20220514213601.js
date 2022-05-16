import React from "react";
import { connect } from "react-redux";

const Detail = (props) => {
  console.log(props);
  return <h1>Detail</h1>;
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDos: state.find((toDo) => toDo.id === parseint(id)) };
};

export default connect(mapStateToProps)(Detail);
