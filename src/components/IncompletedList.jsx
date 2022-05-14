export const IncompletedList = (props) => {
  const {
    incompletedList,
    onClickAddToCompleted,
    onClickDeleteIncompleted
  } = props;
  const style = {
    backgroundColor: "#ffffe0"
  };
  return (
    <>
      <div id="incompletedList" style={style}>
        <ul>
          {incompletedList.map((list, index) => {
            return (
              <li key={list}>
                <div>
                  <p>{list}</p>
                  <button onClick={() => onClickAddToCompleted(index)}>
                    追加
                  </button>
                  <button onClick={() => onClickDeleteIncompleted(index)}>
                    削除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
