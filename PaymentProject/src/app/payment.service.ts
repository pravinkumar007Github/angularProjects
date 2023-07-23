

export class paymentService{

    
   
    PaymentList:any = [{Name:"pravin",Price:"600",CardNumber:"6578-9654-5878-9654"},{Name:"sanjith",Price:"900",CardNumber:"6898-7456-9874-5658"},{Name:"dhana",Price:"1600",CardNumber:"6587-8965-4587-8965"},]
    enableEdit:string = "";
    Insert_Status = "";

    tempval :string  = "";

  

    constructor()
    {

    }
    getPayment()
    {
        return this.PaymentList;
    }
    addPayment(name:string,price:string,cardnumber:string)
    {
                this.PaymentList.push({'Name':name,'Price':price,'CardNumber':cardnumber});
                this.tempval = "disable";
                this.Insert_Status = "notexist"
           
    }

    editPayment(Name:string,price:string,cardnum:string, indexNum:number)
    {
        this.PaymentList[indexNum] = {'Name':Name,'Price':price,'CardNumber':cardnum}
    }
    deletePaymentDetails(indexNumber:number)
    {
        this.PaymentList.splice(indexNumber,1)
        if(this.PaymentList ==0)
        {
            this.tempval = "recordempty";
        }
        else 
        {
            this.tempval = "";
        }
       
    }

}