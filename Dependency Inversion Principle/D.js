"use strict";
// The DIP simply states that high-level classes shouldn’t depend on  low-level components, but instead depend on an abstraction.
// Wrong way - The high-level WindowSwitch depends on the lower-level CarWindow class
class CarWindow {
    open() {
        //... 
    }
    close() {
        //...
    }
}
class WindowSwitch {
    constructor(window) {
        this.window = window;
        this.isOn = false;
    }
    onPress() {
        if (this.isOn) {
            this.window.close();
            this.isOn = false;
        }
        else {
            this.window.open();
            this.isOn = true;
        }
    }
}
class CarWindow {
    open() {
        //...
    }
    close() {
        //...
    }
}
class WindowSwitch {
    constructor(window) {
        this.window = window;
        this.isOn = false;
    }
    onPress() {
        if (this.isOn) {
            this.window.close();
            this.isOn = false;
        }
        else {
            this.window.open();
            this.isOn = true;
        }
    }
}
