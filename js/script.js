//Business logic

function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  }

//User logic
$(document).ready(function(){
    $("form#new-contact").submit(function(event){
        event.preventDefault();

        var inputedFirstName = $("input#new-first-name").val();
        var inputedLastName = $("input#new-last-name").val();
        var newContact = new Contact(inputedFirstName, inputedLastName);

        $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
        $("input#new-first-name").val();
        $("input#new-last-name").val();
    });

    $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
      });  
});