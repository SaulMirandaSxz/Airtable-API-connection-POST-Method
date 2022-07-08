console.log(`Hello, ${base.name}!`);


var url = "https://api-gateway.deel.training/rest/v1/contracts";
var bearer = 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFnZSI6ImRldiIsInRpbWVzdGFtcCI6MTY1MzU2NDgwNzM0NCwiYWRtaW4iOnRydWUsImRlZWwiOiJtYXJjaW8uY2FydmFsaG9AZGVlbC5jb20iLCJpZCI6NDU1NTM5LCJleHAiOjE2NTM2NTEyMDd9.QPQ5xh36VVeBNmXYjy4l_2yEynuRMFKpMHQAKsnjXK0';
fetch(url, {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body : {
  "data": { 
    "title": "",
    "country_code": "",
    "state_code": "",
    "scope_of_work": "",
    "special_clause": "",
    "star_date": "",
    "termination_date": "",
    "client": {
      "legal_entity": { 
        "id": 1
      },
      "team": {
        "id": 1
      }
    },
    "job_title": {
      "id": 1,
      "name": ""
    },
    "seniority": {
      "id": 1
    },
    "meta": {
      "documents_required": true,
      "is_main_income": true
    },
    "type": "",
    "compensation_details" : {
      "amount": 123,
      "currency_code": 123,
      "frequency": "",
      "cycle_end": 2,
      "cycle_end_type": "",
      "payment_due_type": "",
      "payment_due_days": 2,
      "pay_before_wekeends": true,
      "first_payment_date": "",
      "first_payment": 500,
      "scale": ""
    }
  }
}

    }).then(responseJson => {
      console.log(responseJson);
    })
    .catch(error => console.log('error', error));