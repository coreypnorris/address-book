beforeEach(function() {
  Contact.all = [];
});

describe("Contact", function() {
  describe("create", function() {
    it("creates a new instance of a Contact", function() {
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    })
  });
  describe("initialize", function () {
    it("sets the first name and last name properties", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Ken", "Masters");
      testContact.firstName.should.equal("Ken");
      testContact.lastName.should.equal("Masters");
    });
    it("sets up an empty array for the address property", function() {
      var testContact =  Object.create(Contact);
      testContact.initialize("Ken", "Masters");
      testContact.addresses.should.eql([]);
    });
    it("sets up an empty array for the newNumber property", function() {
      var testContact =  Object.create(Contact);
      testContact.initialize("Ken", "Masters");
      testContact.phoneNumbers.should.eql([]);
    });
  });
  describe("fullName", function() {
    it("combines the first and last name, separated by a space", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Ken";
      testContact.lastName = "Masters";
      testContact.fullName().should.equal("Ken Masters");
    });
  });
});
 
describe("Address", function() {
  describe("create", function() {
    it("creates a new instance of an address", function() {
      var testAddress = Address.create();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("it sets the street, city, and state properties", function() {
      var testAddress = Object.create(Address);
      testAddress.initialize("123 4th Ave", "Portland", "Oregon");
      testAddress.street.should.equal("123 4th Ave");
      testAddress.city.should.equal("Portland");
      testAddress.state.should.equal("Oregon");
    });
  });
  describe("fullAddress", function() {
    it("returns the full address with nice formatting", function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 4th Ave";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal("123 4th Ave, Portland, Oregon");
    });
  });
});

describe("PhoneNumber", function() {
  describe("create", function() {
    it("creates a new instance of a phone number", function() {
      var testPhoneNumber = PhoneNumber.create();
      PhoneNumber.isPrototypeOf(testPhoneNumber).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("it sets the phone number property", function() {
      var testPhoneNumber = Object.create(PhoneNumber);
      testPhoneNumber.initialize("555-555-1234");
      testPhoneNumber.phone.should.equal("555-555-1234");
    });
  });
});
