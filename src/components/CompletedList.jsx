export const CompletedList = (props) => {
  const { completedList, onClickAddToInCompleted } = props;
  const style = {
    backgroundColor: "#ff4500"
  };
  return (
    <>
      <div id="completedList" style={style}>
        <ul>
          {completedList.map((list, index) => {
            return (
              <li key={list}>
                <div>
                  <p>{list}</p>
                  <button onClick={() => onClickAddToInCompleted(index)}>
                    戻す
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
