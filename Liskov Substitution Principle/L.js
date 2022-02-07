"use strict";
// " Child classes should never break the parent class’ type definitions "
// The concept of this principle was introduced by Barbara Liskov in a 1987 conference keynote and later published in a paper together with Jannette Wing in 1994.
// As simple as that, a subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.
// In the following example ItalyPostalAddress, UKPostalAddress and USAPostalAddress extend one common class: PostalAddress.
// The AddressWriter class refers PostalAddress: the writer parameter can be of three different sub-types.
class PostalAddress {
}
class ItalyPostalAddress extends PostalAddress {
    WriteAddress() {
        return "Formatted Address Italy" + this.City;
    }
}
class UKPostalAddress extends PostalAddress {
    WriteAddress() {
        return "Formatted Address UK" + this.City;
    }
}
class USAPostalAddress extends PostalAddress {
    WriteAddress() {
        return "Formatted Address USA" + this.City;
    }
}
class AddressWriter {
    PrintPostalAddress(writer) {
        return writer.WriteAddress();
    }
}
