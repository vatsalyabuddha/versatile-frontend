let common = {
    state:[
        {key:"Andhra Pradesh", value:"AP"},
        {key:"Arunachal Pradesh", value:"AR"},
        {key:"Assam", value:"AS"},
        {key:"Bihar", value:"BR"},
        {key:"Chhattisgarh", value:"CG"},
        {key:"Goa", value:"GA"},
        {key:"Gujarat", value:"GJ"},
        {key:"Haryana", value:"HR"},
        {key:"Himachal Pradesh", value:"HP"},
    ],
    brand :[
        {key:"Maruti", value:"Maruti"},
        {key:"Hyundai", value:"Hyundai"},
        {key:"Mahindra", value:"Mahindra"},
        {key:"Tata", value:"Tata"},
        {key:"Toyota", value:"Toyota"},
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