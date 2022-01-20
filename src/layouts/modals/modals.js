import React from "react";
import Tablelist from "layouts/dashboard/components/tablelist/tablelist";
import SuiBox from "components/SuiBox";
import styles from "./modals.module.css";

const Modals = ({ open, close, header, columns, warnRows }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const Mopen = open;
  const Mclose = close;
  const Mheader = header;
  const Mcolumns = columns;
  const MwarnRows = warnRows;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={Mopen ? `${styles.openModal} ${styles.modal}` : `${styles.modal}`}>
      {Mopen ? (
        <section>
          <header className={styles.blinking}>{Mheader}</header>
          <main>
            <SuiBox py={3}>
              <SuiBox mb={3}>
                <Tablelist columns={Mcolumns} rows={MwarnRows} />
              </SuiBox>
            </SuiBox>
          </main>
          <footer>
            <button type="button" className="close" onClick={Mclose}>
              {" "}
              닫기{" "}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modals;
