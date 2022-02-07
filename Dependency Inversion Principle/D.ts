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
    private isOn = false;

    constructor(private window: CarWindow) {

    }

    onPress() {
        if (this.isOn) {
            this.window.close();
            this.isOn = false;
        } else {
            this.window.open();
            this.isOn = true;
        }
    }
}

// Right way - To follow the DIP, the class WindowSwitch should references an interface (IWindow) that is implemented by the object CarWindow

interface IWindow {
    open();
    close();
}

class CarWindow implements IWindow {
    open() {
        //...
    }
    close() {
        //...
    }
}


class WindowSwitch {
    private isOn = false;

    constructor(private window: IWindow) {

    }

    onPress() {
        if (this.isOn) {
            this.window.close();
            this.isOn = false;
        } else {
            this.window.open();
            this.isOn = true;
        }
    }
}