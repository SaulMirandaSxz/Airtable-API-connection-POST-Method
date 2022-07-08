
let inputConfig = input.config();
var userName = inputConfig.name;
var userEmail = inputConfig.email;

var jobTitle = (inputConfig.job).toString();
console.log(userName);

let jsonTransform = JSON.stringify(inputConfig);
console.log(inputConfig);

let response = await fetch('https://api-gateway-demo.deel.network/rest/v1/contracts', {
    method: 'POST',
    body: JSON.stringify((  
 {
  "data": {
    "title": jobTitle,
    "start_date" : "1999-12-31",
    "country_code" : "US",
    "seniority": {
      "id": 2,
      "name": "",
      "level": 2
    },
    "scope_of_work": "string",
    "special_clause": "string",
    "client": {
      "team": {
        "id": 77768,
      },
      "legal_entity": {
        "id": 70833,
        "name": "string",
        "email": "user@example.com",
        "type": "individual",
        "subtype": "string",
        "registration_number": "string",
        "vat_number": "string"
      },
      
    },
    "job_title" : {
          "id" : 1
      },
    "meta" : {
        "documents_required" : true,
    },
    "type" : "pay_as_you_go_time_based",
    "signatures": {
      "client_signature": "string",
      "client_signed_at": "2022-05-24T09:38:46.235Z",
      "worker_signature": userName,
      "worker_signed_at": "2022-05-24T09:38:46.235Z",
      "signed_at": "2022-05-24T09:38:46.235Z"
    },
    "compensation_details": {
      "currency_code": "GBP",
      "amount": 3500,
      "scale": "weekly",
      "frequency": "monthly",
      "cycle_end": 31,
      "cycle_end_type": "DAY_OF_MONTH",
      "payment_due_type": "REGULAR",
      "payment_due_days": 7,
      "first_payment": 2500,
      "gross_annual_salary": "string",
      "gross_signing_bonus": "string",
      "gross_variable_bonus": "string",
    },
    "employment_details": {
      "type": "string",
      "days_per_week": 0,
      "hours_per_day": 0,
      "probation_period": 0,
      "paid_vacation_days": 0
    }
  }
}

)),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + 'API_KEY',
    },
});
console.log(await response.json());






let signContract = await fetch('https://api-gateway-demo.deel.network/rest/v1/contracts/invitations', {
    method: 'POST',
    body: JSON.stringify((  
 {
  "data": {
    "email" : "email@example.com",
    "message" : "Please sign the contract"
}}
)),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'API_KEY',
  },
});
console.log(await signContract.json());




