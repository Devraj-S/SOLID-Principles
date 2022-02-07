// The ISP states that we should write a series of smaller and more specific interfaces that are implemented by the class. Each interface provides an single behavior.

// Wrong-way - The following Printer interface makes it impossible to implement a printer that can print and copy, but not staple

interface Printer {
    copyDocument();
    printDocument(document: Document);
    stapleDocument(document: Document, tray: Number);
}


class SimplePrinter implements Printer {

    public copyDocument() {
        //something
    }

    public printDocument(document: Document) {
        //something
    }

    public stapleDocument(document: Document, tray: Number) {
        //something
    }

}

// Right Way - The following example shows an alternative approach that groups methods into more specific interfaces. It describe a number of contracts that could be implemented individually by a simple printer or simple copier or by a super printer

interface Printer {
    printDocument(document: Document);
}


interface Stapler {
    stapleDocument(document: Document, tray: number);
}


interface Copier {
    copyDocument();
}

class SimplePrinter implements Printer {
    public printDocument(document: Document) {
        //something
    }
}


class SuperPrinter implements Printer, Stapler, Copier {
    public copyDocument() {
        //something
    }

    public printDocument(document: Document) {
        //something
    }

    public stapleDocument(document: Document, tray: number) {
        //something
    }
}