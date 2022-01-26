import React, { useRef } from "react";
import Tablelist from "layouts/dashboard/components/tablelist/tablelist";
import { Grid } from "@mui/material";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";
import styles from "./modals.module.css";

const Modals = ({ open, close, header, columns, warnRows }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const Mopen = open;
  const Mclose = close;
  const Mheader = header;
  const Mcolumns = columns;
  const MwarnRows = warnRows;

  const workerInputRef = useRef();
  const reasonInputRef = useRef();

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={Mopen ? `${styles.openModal} ${styles.modal}` : `${styles.modal}`}>
      {Mopen ? (
        <section>
          <header className={styles.blinking}>{Mheader}</header>
          <main>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Tablelist columns={Mcolumns} rows={MwarnRows} />
              </Grid>
              <Grid item xs={12}>
                <SuiInput ref={workerInputRef} placeholder="작업자를 입력하세요" />
              </Grid>
              <Grid item xs={12}>
                <SuiInput ref={reasonInputRef} placeholder="사유를 입력하세요" />
              </Grid>
            </Grid>
          </main>
          <footer>
            <SuiButton variant="gradient">입력</SuiButton>
            <SuiButton variant="gradient" className="close" onClick={Mclose}>
              {" "}
              닫기{" "}
            </SuiButton>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modals;
