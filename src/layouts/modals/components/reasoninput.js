class ReasonInput {
  constructor(formdata) {
    this.getRequestOptions = {
      method: "POST",
      redirect: "follow",
      body: formdata,
    };
  }

  inputData() {
    fetch(
      `${process.env.REACT_APP_SAFE_API_KEY}?apicall=updateWarningResult`,
      this.getRequestOptions
    );
  }
}

export default ReasonInput;
