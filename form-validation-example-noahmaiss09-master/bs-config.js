module.exports = {
    $(document).on("ready change", function(){
        let correct: boolean = true;
        if ($("#firstName").val() == ""){
            $("#firstNameMandatory").show();
            correct = false;
        }else{
            $("#firstNameMandatory").hide();
        }
    
        if ($("#lastName").val() == ""){
            $("#lastNameMandatory").show();
            correct = false;
        }else{
            $("#lastNameMandatory").hide();
        }
    
        if ($("#email").val() == "" && $("#newsletter").prop('checked')){
            $("#emailMandatory").hide();
        }else{
            $("#emailMandatory").show();
            correct = false;
        }
    
        if ($("#mediaChannelSelect").val() == "Other"){
            $("#otherMediaChannel").show();
        }else{
            $("#otherMediaChannel").hide();
        }
        
        if (correct == false){
            $("#submit").hide();
        }else{
            $("#submit").show();
        }
    })
};