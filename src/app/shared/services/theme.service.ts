import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {

    private renderer: Renderer2;
    constructor(rendererFactory: RendererFactory2) {

        this.renderer = rendererFactory.createRenderer(null, null);
        this.init();
    }

    init() {
        const darkMode = localStorage.getItem('darkMode');
        this.setThemeMode((darkMode == "true"));
    }

    setThemeMode(darkMode: any) {
        localStorage.setItem("darkMode", darkMode);

        const darkClassName = 'darkMode';

        if (darkMode) {
            this.renderer.addClass(document.body, darkClassName);
        } else {
            this.renderer.removeClass(document.body, darkClassName);
        }
    }

}
