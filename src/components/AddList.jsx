export const AddList = (props) => {
  const { onChangeInputText, onClickAddText, errorText } = props;
  const style = {
    backgroundColor: "#c1ffff"
  };
  return (
    <>
      <div style={style}>
        <input onChange={onChangeInputText} placeholder="ここに入力" />
        <button onClick={onClickAddText}>追加</button>
      </div>
      {errorText !== "" && <span id="lblAlert">{errorText}</span>}
    </>
  );
};
