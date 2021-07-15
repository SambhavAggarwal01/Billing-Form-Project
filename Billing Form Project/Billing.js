/* JavaScript Functions for the function billingFunction(). It is responsible for setting and clearing the fields in Billing Information */

/* For Submitting form without checking checkbox(i.e., if Both billing and shipping info are different) ;Tip : first check and then uncheck the checkbox then submit the form */

function billingFunction()
{
    /* Function for copying Shipping Information to Billing Information if the Checkbox is checked(i.e., If the Billing and Shipping info is same )*/  

    if(document.getElementById('same').checked)
    {

        document.getElementById('billingName').value = document.getElementById('shippingName').value;
        document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
        
    
    }

    /* Function to  submit the form if both the information are different without clicking the checkbox */

    else
    {
    	document.getElementById('billingName').value = "";
    	document.getElementById('billingZip').value = "";

    	document.getElementById("billingName").removeAttribute("required");
        document.getElementById("billingZip").removeAttribute("required");
    }	
    	
}

