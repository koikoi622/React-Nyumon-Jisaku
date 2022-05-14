import { useState } from "react";
import "./styles.css";
import { AddList } from "./components/AddList";
import { IncompletedList } from "./components/IncompletedList";
import { CompletedList } from "./components/CompletedList";

export default function App() {
  const [text, setText] = useState("");
  const [incompletedList, setIncompletedList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [errorText, setErrorText] = useState("");
  const onChangeInputText = (e) => {
    setText(e.target.value);
  };
  // 追加ボタンクリック時
  const onClickAddText = () => {
    if (text === "") {
      setErrorText("何か入力してください。");
      return;
    }
    if (incompletedList.length >= 5) {
      setErrorText("未完了を消化してください。");
      return;
    }
    setErrorText("");
    const newList = [...incompletedList, text];
    setIncompletedList(newList);
  };
  // 未完了リストの追加ボタンクリック時
  const onClickAddToCompleted = (index) => {
    const newIncompletedList = [...incompletedList];
    newIncompletedList.splice(index, 1);
    const targetAddList = incompletedList[index];
    setCompletedList([...completedList, targetAddList]);
    setIncompletedList(newIncompletedList);
  };
  // 未完了リストの削除ボタンクリック時
  const onClickDeleteIncompleted = (index) => {
    const newIncompletedList = [...incompletedList];
    newIncompletedList.splice(index, 1);
    setIncompletedList(newIncompletedList);
  };
  // 完了リストの戻すボタンクリック時
  const onClickAddToInCompleted = (index) => {
    const targetAddList = completedList[index];
    setIncompletedList([...incompletedList, targetAddList]);
    const newCompletedList = [...completedList];
    newCompletedList.splice(index, 1);
    setCompletedList(newCompletedList);
  };
  return (
    <>
      <AddList
        onChangeInputText={onChangeInputText}
        onClickAddText={onClickAddText}
        errorText={errorText}
      />
      {/* <div>
        <input onChange={onChangeInputText} placeholder="ここに入力" />
        <button onClick={onClickAddText}>追加</button>
      </div>
      {isEmpty && <span id="lblAlert">何か入力してください。</span>} */}
      <IncompletedList
        incompletedList={incompletedList}
        onClickAddToCompleted={onClickAddToCompleted}
        onClickDeleteIncompleted={onClickDeleteIncompleted}
      />
      {/* <div id="incompletedList">
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
      </div> */}
      <CompletedList
        completedList={completedList}
        onClickAddToInCompleted={onClickAddToInCompleted}
      />
      {/* <div id="completedList">
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
      </div> */}
    </>
  );
}
