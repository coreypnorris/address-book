var Contact = {
  all: [],
  create: function(firstName, lastName) {
    var contact = Object.create(Contact);
    contact.initialize(firstName, lastName);
    Contact.all.push(contact);
    return contact;
  },
  initialize: function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses = [];
    this.phoneNumbers = [];
  },
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
 
var Address = {
  create: function(street, city, state) {
    var address = Object.create(Address);
    address.initialize(street, city, state);
    return address;
  },
  initialize: function(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  },
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  }
};
 
var PhoneNumber = {
  create: function(phone) {
    var newNumber = Object.create(PhoneNumber);
    newNumber.initialize(phone);
    return newNumber;
  },
  initialize: function(phone) {
    this.phone = phone;
  }
};

$(document).ready(function() {
  $("#add-phone").click(function() {
    $("#new-phones").append('<div class="new-phone">' +
                              '<div class="form-group">' +
                                '<label for="new-phone">Phone</label>' +
                                '<input type="text" class="form-control new-phone-number">' +
                              '</div>' +
                            '</div>')
  });

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-control new-city">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-state">State</label>' +
                                  '<input type="text" class="form-control new-state">' +
                                '</div>' +
                              '</div>')
  });
 
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var newContact = Contact.create($("input#new-first-name").val(),
                                    $("input#new-last-name").val());
    
    $(".new-phone").each(function() {
      var newNumber = PhoneNumber.create($(this).find("input.new-phone-number").val());
      
      newContact.phoneNumbers.push(newNumber);
    });

    $(".new-address").each(function() {
      var newAddress = Address.create($(this).find("input.new-street").val(),
                                      $(this).find("input.new-city").val(),
                                      $(this).find("input.new-state").val());
      
      newContact.addresses.push(newAddress);
    });
 
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "<span></li>");
 
    $(".contact").last().click(function() {
      $("#show-contact").show();
 
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
 
      $("ul#phoneNumbers").text("");
      newContact.phoneNumbers.forEach(function(phone) {
        $("ul#phoneNumbers").append("<li>" + phone.phone + "</li>");
      });

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
  
    this.reset();
  });
});
