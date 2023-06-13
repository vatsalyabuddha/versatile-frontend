let common = {
    state:[
        { "key": "Andhra Pradesh", "value": "AP" },
        { "key": "Arunachal Pradesh", "value": "AR" },
        { "key": "Assam", "value": "AS" },
        { "key": "Bihar", "value": "BR" },
        { "key": "Chhattisgarh", "value": "CG" },
        { "key": "Delhi", "value": "DL" },
        { "key": "Goa", "value": "GA" },
        { "key": "Gujarat", "value": "GJ" },
        { "key": "Haryana", "value": "HR" },
        { "key": "Himachal Pradesh", "value": "HP" },
        { "key": "Jammu and Kashmir", "value": "JK" },
        { "key": "Jharkhand", "value": "JH" },
        { "key": "Karnataka", "value": "KA" },
        { "key": "Kerala", "value": "KL" },
        { "key": "Lakshadweep Islands", "value": "LD" },
        { "key": "Madhya Pradesh", "value": "MP" },
        { "key": "Maharashtra", "value": "MH" },
        { "key": "Manipur", "value": "MN" },
        { "key": "Meghalaya", "value": "ML" },
        { "key": "Mizoram", "value": "MZ" },
        { "key": "Nagaland", "value": "NL" },
        { "key": "Odisha", "value": "OD/OR" },
        { "key": "Pondicherry", "value": "PY" },
        { "key": "Punjab", "value": "PB" },
        { "key": "Rajasthan", "value": "RJ" },
        { "key": "Sikkim", "value": "SK" },
        { "key": "Tamil Nadu", "value": "TN" },
        { "key": "Telangana", "value": "TS" },
        { "key": "Tripura", "value": "TR" },
        { "key": "Uttar Pradesh", "value": "UP" },
        { "key": "Uttarakhand", "value": "UK/UA" },
        { "key": "West Bengal", "value": "WB" },
        { "key": "Andaman and Nicobar Islands", "value": "AN" },
        { "key": "Chandigarh", "value": "CH" },
        { "key": "Dadra & Nagar Haveli", "value": "DN" },
        { "key": "Daman & Diu", "value": "DD" },
        { "key": "Ladakh", "value": "LA" },
        { "key": "Other Territory", "value": "OT" }
      ]
      ,
    brand :[
        {key:"Maruti", value:"Maruti"},
        {key:"Hyundai", value:"Hyundai"},
        {key:"Mahindra", value:"Mahindra"},
        {key:"Tata", value:"Tata"},
        {key:"Toyota", value:"Toyota"},
    ],
    carBrands :[
        "Maruti Suzuki",
        "Hyundai",
        "Tata Motors",
        "Mahindra",
        "Honda",
        "Toyota",
        "Kia",
        "Ford",
        "Volkswagen",
        "Renault",
        "Skoda",
        "Nissan",
        "Mercedes-Benz",
        "BMW",
        "Audi"
      ],
    fuel_type:[
        {key:"Petrol", value:"Petrol"},
        {key:"Diesel", value:"Diesel"},
        {key:"CNG", value:"CNG"},
        {key:"Electric", value:"Electric"},
        {key:"Hybrid", value:"Hybrid"},
    ],
    getMonth(num){
        switch(num){
            case 0: return "Jan";
            case 1: return "Feb";
            case 2: return "Mar";
            case 3: return "Apr";
            case 4: return "May";
            case 5: return "Jun";
            case 6: return "Jul";
            case 7: return "Aug";
            case 8: return "Sep";
            case 9: return "Oct";
            case 10: return "Nov";
            case 11: return "Dec";
            default: return "Aug"

        }
    }
}



export default common