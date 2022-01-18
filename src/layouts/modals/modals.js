import React from "react";
import SuiBox from "components/SuiBox";
import styles from "./modals.module.css";

const Modals = ({ open, close, header }) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const Mopen = open;
  const Mclose = close;
  const Mheader = header;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={Mopen ? `${styles.openModal} ${styles.modal}` : `${styles.modal}`}>
      {Mopen ? (
        <section>
          <header className={styles.blinking}>{Mheader}</header>
          <main>
            <SuiBox mb={3}>
              <ul>
                <li>경고</li>
                <li>사유:낙상</li>
                <li>작업자:서영준</li>
                <li>위치:정보통신산업기술원</li>
                <li>전화번호:01012341234</li>
              </ul>
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
