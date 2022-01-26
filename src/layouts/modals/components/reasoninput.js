import axios from "axios";
var formdata = new FormData();
    formdata.append("idx", "79");
    formdata.append("result", "테스트입니다");

class ReasonInput {
    constructor(){
        this.getRequestOptions={
            method: 'POST',
            body: formdata,
            redirect: "follow"
        }
    }

    async Input(){
        const response = await fetch(
            'https://d61b-175-120-29-131.ngrok.io/Api/v1/Api.php?apicall=updateWarningResult',
            this.getRequestOptions
        ),
        const result_1 = await response.json();

        return console.log(result_1.insertWarning);
    }
    
    
    
    
    
}
