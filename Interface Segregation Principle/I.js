"use strict";
// The ISP states that we should write a series of smaller and more specific interfaces that are implemented by the class. Each interface provides an single behavior.
class SimplePrinter {
    copyDocument() {
        //something
    }
    printDocument(document) {
        //something
    }
    stapleDocument(document, tray) {
        //something
    }
}
class SimplePrinter {
    printDocument(document) {
        //something
    }
}
class SuperPrinter {
    copyDocument() {
        //something
    }
    printDocument(document) {
        //something
    }
    stapleDocument(document, tray) {
        //something
    }
}
