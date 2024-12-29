interface Button {
    paint(): void;
}

interface Checkbox {
    paint(): void;
}
class WinButton implements Button {
    paint(): void {
        console.log("Render a button in Windows style.");
    }
}

class MacButton implements Button {
    paint(): void {
        console.log("Render a button in macOS style.");
    }
}

class WinCheckbox implements Checkbox {
    paint(): void {
        console.log("Render a checkbox in Windows style.");
    }
}

class MacCheckbox implements Checkbox {
    paint(): void {
        console.log("Render a checkbox in macOS style.");
    }
}
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}
class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }
    createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }
    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}
class Application1 {
    private factory: GUIFactory;
    private button: Button;

    constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    createUI(): void {
        this.button = this.factory.createButton();
    }

    paint(): void {
        this.button.paint();
    }
}
class ApplicationConfigurator {
    static main() {
        let factory: GUIFactory;

        // Simulate reading configuration
        const config = { OS: "Windows" };

        if (config.OS === "Windows") {
            factory = new WinFactory();
        } else if (config.OS === "Mac") {
            factory = new MacFactory();
        } else {
            throw new Error("Error! Unknown operating system.");
        }

        const app = new Application1(factory);
        app.createUI();
        app.paint();
    }
}

// Run the application
ApplicationConfigurator.main();
