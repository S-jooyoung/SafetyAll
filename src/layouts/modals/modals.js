import React, { useRef } from "react";
import Tablelist from "layouts/dashboard/components/tablelist/tablelist";
import { Grid } from "@mui/material";

// Audio
import alarm from "assets/audio/alarm.mp3";

import SuiButton from "components/SuiButton";
import SuiInput from "components/SuiInput";

import styles from "./modals.module.css";
import ReasonInput from "./components/reasoninput";

const Modals = ({ open, close, header, columns, warnRows }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const Mopen = open;
  const Mclose = close;
  const Mheader = header;
  const Mcolumns = columns;
  const MwarnRows = warnRows;

  const workerInputRef = useRef();
  const reasonInputRef = useRef();

  const formdata = new FormData();

  const handleInput = () => {
    formdata.append("idx", workerInputRef.current.value);
    formdata.append("result", reasonInputRef.current.value);

    const reasonInput = new ReasonInput(formdata);

    reasonInput.inputData();
  };

  const onClick = () => {
    handleInput();
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      handleInput();
    }
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={Mopen ? `${styles.openModal} ${styles.modal}` : `${styles.modal}`}>
      {Mopen ? (
        <section>
          <iframe
            className={styles.sound}
            title="silencs"
            src={alarm}
            allow="autoplay"
            id="audio"
          />
          <header className={styles.blinking}>{Mheader}</header>
          <main>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Tablelist columns={Mcolumns} rows={MwarnRows} />
              </Grid>
              <Grid item xs={12}>
                <SuiInput type="number" inputRef={workerInputRef} placeholder="번호를 입력하세요" />
              </Grid>
              <Grid item xs={12}>
                <SuiInput
                  type="text"
                  inputRef={reasonInputRef}
                  placeholder="사유를 입력하세요"
                  onKeyPress={onEnter}
                />
              </Grid>
            </Grid>
          </main>
          <footer>
            <SuiButton className={styles.btn} variant="gradient" onClick={onClick}>
              입력
            </SuiButton>
            <SuiButton variant="gradient" onClick={Mclose}>
              닫기
            </SuiButton>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modals;
